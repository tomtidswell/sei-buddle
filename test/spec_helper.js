// require chai library - attach some methods to the global object
const chai = require('chai')
global.should = chai.should()
global.expect = chai.expect

// set our node environment to be test
process.env.NODE_ENV = 'test'

// supertest makes mock HTTP requests
const supertest = require('supertest')
const app = require('../index.js') //import the app into this file
global.api = supertest(app) //then invoke the app through supertest
