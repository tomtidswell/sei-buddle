/* globals describe, it, api, expect, beforeEach, afterEach  */

require('../spec_helper')
const Events = require('../../models/event')
const User = require('../../models/user')
const eventsData = require('../../db/seedsDataEvents')
const userData = require('../../db/seedsDataUsers')

let userToken = null
let userCounter = 0

// a test for the Events controller, which includes the registration and login of a single user to test authentication
describe('Event Controller Test', ()=>{

  // empty the database of all Events and Users before running each test
  beforeEach(done => {
    Events.collection.deleteMany()
    //User.collection.deleteMany()

    User.create(userData[userCounter])
      .then(() => done())
      .catch(() => done())

    userCounter++
  })

  // empty the database of all Events and Users after running each test
  afterEach(done => {
    Events.collection.deleteMany()
    //User.collection.deleteMany()
    done()
  })

  // a sub-test for the Events GET request
  describe('GET /api/events', ()=>{

    //before each sub-test, create an entry in the database
    beforeEach(done => {
      Events.create(eventsData[0])
        .then(() => done())
        .catch(() => done())
    })

    it('Should return a 200 response', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('Should respond with a json object', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('Should return an array', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

    it('Should return an array of Events objects', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res)=>{
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.to.have.all.keys(['__v',
              '_id',
              'createdAt',
              'updatedAt',
              'attendees',
              'category',
              'comments',
              'date',
              'description',
              'name',
              'postcode',
              'subcategory'
            ])
          done()
        })
    })

    it('Should return Events objects with properties of the correct type', done => {
      api
        .get('/api/events')
        .set('Accept', 'application/json')
        .end((err, res)=>{
          const firstEvents = res.body[0]
          expect(firstEvents)
            .to.have.property('_id')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('createdAt')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('updatedAt')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('attendees')
            .and.to.be.an('array')
          expect(firstEvents)
            .to.have.property('category')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('comments')
            .and.to.be.an('array')
          expect(firstEvents)
            .to.have.property('date')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('description')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('location')
            .and.to.be.an('array')
          expect(firstEvents)
            .to.have.property('name')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('postcode')
            .and.to.be.a('string')
          expect(firstEvents)
            .to.have.property('subcategory')
            .and.to.be.a('string')
          done()
        })
    })


    describe('Make more than one Events', () => {

      beforeEach(done => {
        Events.create([{ ...eventsData[3] }, { ...eventsData[4] }])
          .then(() => done())
          .catch(done)
      })

      it('should return three Events', done => {
        api
          .get('/api/events')
          .set('Accept', 'application/json')
          .end((err, res) => {
            //console.log(res.body)
            expect(res.body.length).to.equal(3)
            done()
          })
      })
    })
  })

  describe('GET /api/events/:id', () => {

    let newEvent = null

    beforeEach(done => {
      Events.create(eventsData[0])
        .then(theEvent => {
          newEvent = theEvent
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/events/${newEvent.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })


  // describe('CREATE a USER by POST to /api/register', () => {
  //
  //   it('should create a user account', done => {
  //     api
  //       .post('/api/register')
  //       .set('Accept', 'application/json')
  //       .send(userData[userCounter])
  //       .end((err, res) => {
  //         userCounter++
  //         const registered = res.body
  //         //registeredUser = res.body.user
  //         //console.log(registered)
  //
  //         expect(registered)
  //           .to.have.property('user')
  //           .and.to.be.an('object')
  //
  //         expect(registered)
  //           .to.have.property('message')
  //           .and.to.be.a('string')
  //
  //         done()
  //       })
  //   })
  // })


  describe('LOGIN the template USER by POST to /api/login', () => {

    it('the user should be able to log in', done => {
      const request = { email: userData[0].email, password: userData[0].password }
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send(request)
        .end((err, res) => {
          //console.log(res.body)
          userToken = res.body.token
          done()
        })
    })
  })


  describe('POST /api/events', () => {

    it('the user should be able to log in', done => {
      const request = { email: userData[0].email, password: userData[0].password }
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send(request)
        .end((err, res) => {
          //console.log(res.body)
          userToken = res.body.token
          done()
        })
    })

    it('should return a 201 response', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .set('Authorization', userToken)
        .send(eventsData[5])
        .expect(201, done)
    })

    it('should create an Event', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .set('Authorization', userToken)
        .send(eventsData[6])
        .end((err, res) => {
          const oneEvent = res.body
          //console.log(res.body)
          expect(oneEvent)
            .to.have.property('_id')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('createdAt')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('updatedAt')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('attendees')
            .and.to.be.an('array')
          expect(oneEvent)
            .to.have.property('category')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('comments')
            .and.to.be.an('array')
          expect(oneEvent)
            .to.have.property('date')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('description')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('location')
            .and.to.be.an('array')
          expect(oneEvent)
            .to.have.property('name')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('postcode')
            .and.to.be.a('string')
          expect(oneEvent)
            .to.have.property('subcategory')
            .and.to.be.a('string')
          done()
        })
    })
  })


  describe('DELETE /api/events/:id', () => {

    let newEvent = null


    beforeEach(done => {
      const request = { email: userData[0].email, password: userData[0].password }

      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send(request)
        .end((err, res) => {
          console.log(res.body)
          userToken = res.body.token
        })

      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .set('Authorization', userToken)
        .send(eventsData[5])
        .end((err, res) => {
          console.log('response after creating',res.body)
          newEvent = res.body._id
          done()
        })
    })


    it('should return a 204 response when deleting', done => {
      console.log('New event id:', newEvent)
      api
        .delete(`/api/events/${newEvent}`)
        .set('Accept', 'application/json')
        .set('Authorization', userToken)
        .expect(204, done)
    })
  })

})
