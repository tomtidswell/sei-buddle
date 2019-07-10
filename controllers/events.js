const Event = require('../models/event')

function indexRoute(req, res, next) {
  console.log('Starting INDEX logic')
  console.log('Query string',req.query)
  Event
    .find(req.query)
    .populate('user')
    .then(events => res.status(200).json(events))
    .catch(next)
}

function showRoute(req, res, next) {
  console.log('Starting SHOW logic')
  Event
    .findById(req.params.id)
    .populate('user')
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      return res.status(200).json(eventItem)
    })
    .catch(next)
}

function createRoute(req, res, next) {
  console.log('Starting CREATE logic')
  req.body.user = req.currentUser
  Event
    .create(req.body)
    .then(eventItem => res.status(201).json(eventItem))
    .catch(next)
}

function editRoute(req, res, next) {
  console.log('Starting EDIT logic')
  Event
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      console.log('user', eventItem.user)
      console.log('req.currentUser', req.currentUser)
      console.log('true or false?', !eventItem.user.equals(req.currentUser))
      if (!eventItem.user.equals(req.currentUser._id)) throw new Error('Unauthorized')
      Object.assign(eventItem, req.body)
      return eventItem.save()
    })
    .then(eventItem => res.status(202).json(eventItem))
    .catch(next)
}

// function deleteRoute(req, res, next) {
//   console.log('Starting DELETE logic')
//   Event
//     .findById(req.params.id)
//     .then(eventItem => {
//       console.log('found event:', eventItem, 'for params:',req.params)
//       if (!eventItem) throw new Error('Not Found')
//       console.log('User:',req.currentUser)
//       console.log('Event:',eventItem)
//       if (!eventItem.user.equals(req.currentUser)) throw new Error('Unauthorized')
//       return eventItem.remove()
//     })
//     .then(() => res.sendStatus(204))
//     .catch(next)
// }


function deleteRoute(req, res, next) {
  Event
    .findById(req.params.id)
    .then(event => {
      if (!event.user.equals(req.currentUser._id))
        throw new Error('Unauthorized')
      return event.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  console.log('Starting COMMENT CREATE logic')
  req.body.user = req.currentUser
  Event
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      eventItem.comments.push(req.body)
      return eventItem.save()
    })
    .then(eventItem => res.status(201).json(eventItem))
    .catch(next)
}

function commentDeleteRoute(req, res, next) {
  console.log('Starting COMMENT DELETE logic')
  Event
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      const comment = eventItem.comments.id(req.params.commentId)
      if (!comment.user.equals(req.currentUser._id)) throw new Error('Unauthorized')
      comment.remove()
      return eventItem.save()
    })
    .then(eventItem => res.status(202).json(eventItem))
    .catch(next)
}

function attendRoute(req, res, next) {
  Event
    .findById(req.params.id)
    .populate('attendees.user')
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')

      const alreadyAttending = eventItem.attendees.some(attendee => attendee.user.equals(req.currentUser))
      console.log('Already attending?', alreadyAttending)

      alreadyAttending ?
      //if the user is already attending, remove them
        eventItem.attendees = eventItem.attendees.filter(attendee => !attendee.user.equals(req.currentUser)) :
      //if the user isnt attending, add them
        eventItem.attendees.push({ user: req.currentUser })

      return eventItem.save()
    })
    .then(eventItem => res.status(200).json(eventItem))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute,
  attend: attendRoute
}
