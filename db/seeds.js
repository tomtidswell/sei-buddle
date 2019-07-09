const mongoose = require('mongoose')
const axios = require('axios')
const { dbURI } = require('../config/environment')
const Event = require('../models/event')
const User = require('../models/user')
const events1 = require('./seedsDataEvents')
const users1 = require('./seedsDataUsers')
const events2 = require('./seedsEventsSheema')
const users2 = require('./seedsUsersSheema')

const eventsData = [...events1, ...events2]
const usersSeed = [...users1, ...users2]
let usersDataApi = null

mongoose.connect(dbURI, { useNewUrlParser: true }, (err,db)=>{
  // connection error handling, or confirm connection
  if (err) return console.log(`There is an error in connecting: ${err}`)
  else console.log(`Connected to ${db.name} for seeding`)

  //clear the database, then do all the follow on actions sequentially
  db.dropDatabase()
    .then(() => console.log('Database clear complete'))

  //get some users from the randomuser.me api
    .then(() => axios.get('https://randomuser.me/api/?noinfo&results=36&nat=gb&exc=phone,id,registered'))

  //format the data so it can be used to add the users
    .then(res => {
      //console.log('RandomUser',res.data.results[0])
      usersDataApi = res.data.results.map((user,i) => {
        return {
          username: usersSeed[i].username,
          email: usersSeed[i].email,
          password: usersSeed[i].password,
          passwordConfirmation: usersSeed[i].passwordConfirmation,
          bio: usersSeed[i].bio,

          //further files from api
          gender: user.gender,
          phone: user.cell,
          dob: user.dob.date,
          //location: user.location,
          location: {
            street: user.location.street
          },
          picture: user.picture.large
        }
      })
      console.log(usersDataApi)
    })

  //add the users from the seed file
  //.then(() => User.create(usersData))
    .then(() => User.create(usersDataApi))


    // confirm the users, and enhance the event data and comments with the first user
    .then(users => {
      console.log(`Added ${users.length} users into the database`)

      return eventsData.map(oneEvent => {
        //enforce lowercase on the category and subcategory, and replace spaces with dashes
        oneEvent.category = oneEvent.category.toLowerCase().replace(/\s/g,'-')
        oneEvent.subcategory = oneEvent.subcategory.toLowerCase().replace(/\s/g,'-')

        //choose a random user for the event
        let randomUser = Math.floor(users.length * Math.random())
        oneEvent.user = users[randomUser]

        //choose a second random user for the event as an attendee, but only add that user as an attendee if they are an odd numbered user (so then not all events will have attendees)
        randomUser = Math.floor(users.length * Math.random())
        if (randomUser % 2) oneEvent.attendees = [users[randomUser]]

        // oneEvent.comments = oneEvent.comments.map((comment,index) => {
        //   //set the user to always be index 0 unless it is the first comment
        //   return { ...comment, createdBy: users[index === 0 ? 1 : 0 ] }
        // })

        //console.log(oneEvent)
        return { ...oneEvent }
      })
    })
    //add the events
    .then(enhancedEventData => Event.create(enhancedEventData))
    .then(events => console.log(`Added ${events.length} events into the database`))

    //finally close the database connection
    .finally(() => {
      console.log('Connection closed')
      mongoose.connection.close()
    })
    .catch(err => console.log(err.message))
})
