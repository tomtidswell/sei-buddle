const User = require('../models/user')

function userShow(req, res, next) {
  console.log('SHOW user')
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')
      return res.status(200).json(user)
    })
    .catch(next)
}

function userEdit(req, res, next) {
  console.log('EDIT user')
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')
      if (!user.equals(req.currentUser)) throw new Error('Unauthorized')
      Object.assign(user, req.body)
      return user.save()
    })
    .then(user => res.status(202).json(user))
    .catch(next)
}

function userDelete(req, res, next) {
  console.log('DELETE user')
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) throw new Error('Not Found')
      if (!user.equals(req.currentUser)) throw new Error('Unauthorized')
      return user.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  userShow,
  userEdit,
  userDelete
}
