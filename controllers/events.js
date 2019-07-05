const Events = require('../models/events')

function indexRoute(req, res, next) {
  Events
    .find(req.query)
    .then(events => res.status(200).json(events))
    .catch(next)
}

function showRoute(req, res, next) {
  Events
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      return res.status(200).json(eventItem)
    })
    .catch(next)
}

function createRoute(req, res, next) {
  req.body.user = req.currentUser
  Events
    .create(req.body)
    .then(eventItem => res.status(201).json(eventItem))
    .catch(next)
}

function editRoute(req, res, next) {
  Events
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      if (!eventItem.user.equals(req.currentUser)) throw new Error('Unauthorized')
      Object.assign(eventItem, req.body)
      return eventItem.save()
    })
    .then(eventItem => res.status(202).json(eventItem))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Events
    .findById(req.params.id)
    .then(eventItem => {
      if (!eventItem) throw new Error('Not Found')
      if (!eventItem.user.equals(req.currentUser)) throw new Error('Unauthorized')
      return eventItem.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

function commentCreateRoute(req, res, next) {
  req.body.user = req.currentUser
  Events
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
  Events
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

// function likeRoute(req, res, next) {
//   Events
//     .findById(req.params.id)
//     .then(eventItem => {
//       if (!eventItem) throw new Error('Not Found')
//       if (eventItem.likes.some(like => like.user._id.equals(req.currentUser))) return eventItem
//       eventItem.likes.push({ user: req.currentUser })
//       return eventItem.save()
//     })
//     .then(eventItem => res.status(200).json(eventItem))
//     .catch(next)
// }

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  edit: editRoute,
  delete: deleteRoute,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
}