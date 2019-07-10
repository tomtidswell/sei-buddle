const router = require('express').Router()
const events = require('../controllers/events')
const users = require('../controllers/users')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.edit)
  .delete(secureRoute, events.delete)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/events/:id/comments/:commentId')
  .delete(secureRoute, events.commentDelete)

router.route('/users/:id')
  .get(users.userShow)

router.route('/events/:id/attend')
  .get(secureRoute, events.attend)

router.route('/login')
  .post(auth.login)

router.route('/register')
  .post(auth.register)

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not Found' }))

module.exports = router
