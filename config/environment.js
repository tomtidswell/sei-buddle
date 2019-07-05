const port = process.env.PORT || 4000
const secret = process.env.SECRET || 'shhh its a secret'
const env = process.env.NODE_ENV || 'dev'
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jurassic-park-form-lab'

module.exports = { port, dbURI, secret, env }
