const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Event = require('../models/event')
const User = require('../models/user')
const events1 = require('./seedsDataEvents')
const users1 = require('./seedsDataUsers')
const events2 = require('./seedsEventsSheema')
const users2 = require('./seedsUsersSheema')

const eventsData = [...events1, ...events2]
const usersData = [...users1, ...users2]

mongoose.connect(dbURI, { useNewUrlParser: true }, (err,db)=>{
  // connection error handling, or confirm connection
  if (err) return console.log(`There is an error in connecting: ${err}`)
  else console.log(`Connected to ${db.name} for seeding`)

  //clear the database, then do all the follow on actions sequentially
  db.dropDatabase()
    .then(() => console.log('Database clear complete'))

    //add the users
    .then(() => User.create(usersData))
    // confirm the users, and enhance the event data and comments with the first user
    .then(users => {
      console.log(`Added ${users.length} users into the database`)

      return eventsData.map(oneEvent => {
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

        console.log(oneEvent)
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
