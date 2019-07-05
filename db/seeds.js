const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Event = require('../models/event')
const User = require('../models/user')
const eventsData = require('./seedsDataEvents')
const usersData = require('./seedsDataUsers')

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
        // oneEvent.comments = oneEvent.comments.map((comment,index) => {
        //   //set the user to always be index 0 unless it is the first comment
        //   return { ...comment, createdBy: users[index === 0 ? 1 : 0 ] }
        // })
        console.log(oneEvent)
        return { ...oneEvent, user: users[0] }
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
