const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  console.log('Starting REGISTER logic')
  User.create(req.body)
    .then(user => res.status(201).json({ message: `Thanks for registering ${user.username}!`, user }))
    .catch(next)
}

function login(req, res, next) {
  console.log('Starting LOGIN logic')
  User.findOne({ email: req.body.email })
    .then(user => {
      console.log(user)
      if (!user || !user.validatePassword(req.body.password)) throw new Error('Unauthorized')
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '7d' })
      res.json({ message: `Welcome back ${user.username}!`, token })
    })
    .catch(next)
}

module.exports = {
  register,
  login
}
