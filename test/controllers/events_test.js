/* globals describe, it, api, expect, beforeEach, afterEach  */

require('../spec_helper')
const Events = require('../../models/event')


// a test for the Events controller
describe('Event Controller Test', ()=>{

  // empty the database of all Events before running each test
  beforeEach(done => {
    Events.collection.deleteMany()
    done()
  })

  // empty the database of all Events after running each test
  afterEach(done => {
    Events.collection.deleteMany()
    done()
  })

  // a sub-test for the Events GET request
  describe('GET /api/events', ()=>{

    //before each sub-test, create an entry in the database
    beforeEach(done => {
      Events.create([{
        category: 'Sports',
        subcategory: 'Tennis',
        name: 'Tennis at Saturday',
        description: 'I am looking for someone to play tennis with me on Saturday 13th July. I have booked a court in Hyde Park for 3pm, please RSVP below.',
        location: {
          line1: 'Hyde Park London',
          city: 'London',
          postcode: 'W2 2UH'
        },
        postcode: 'W2 2UH',
        date: '01/01/2019'
      }])
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
              'location',
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
        Events.create([
          {
            category: 'Sports',
            subcategory: 'Tennis',
            name: 'Tennis at Saturday',
            description: 'I am looking for someone to play tennis with me on Saturday 13th July. I have booked a court in Hyde Park for 3pm, please RSVP below.',
            location: {
              line1: 'Hyde Park London',
              city: 'London',
              postcode: 'W2 2UH'
            },
            postcode: 'W2 2UH',
            date: '01/01/2019'
          },
          {
            category: 'Sports',
            subcategory: 'Tennis',
            name: 'Tennis at Saturday',
            description: 'I am looking for someone to play tennis with me on Saturday 13th July. I have booked a court in Hyde Park for 3pm, please RSVP below.',
            location: {
              line1: 'Hyde Park London',
              city: 'London',
              postcode: 'W2 2UH'
            },
            postcode: 'W2 2UH',
            date: '01/01/2019'
          }
        ])
          .then(() => done())
          .catch(done)
      })

      it('should return three Events', done => {
        api
          .get('/api/events')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.body.length).to.equal(3)
            done()
          })
      })
    })

  })


  describe('POST /api/events', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .send({

        })
        .expect(201, done)
    })

    it('should create a Events', done => {
      api
        .post('/api/events')
        .set('Accept', 'application/json')
        .send({

        })
        .end((err, res) => {
          const events = res.body

          expect(events)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(events)
            .to.have.property('brand')
            .and.to.be.a('string')

          expect(events)
            .to.have.property('colour')
            .and.to.be.a('string')

          expect(events)
            .to.have.property('price')
            .and.to.be.a('number')

          expect(events)
            .to.have.property('createdAt')
            .and.to.be.a('string')

          expect(events)
            .to.have.property('updatedAt')
            .and.to.be.a('string')

          done()
        })
    })
  })


  describe('GET /api/events/:id', () => {

    let events

    beforeEach(done => {
      events.create({

      })
        .then(eventsData => {
          events = eventsData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/events/${events.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })

  describe('DELETE /api/events/:id', () => {

    let events

    beforeEach(done => {
      events.create({

      })
        .then(eventsData => {
          events = eventsData
          done()
        })
        .catch(done)
    })

    it('should return a 204 response', done => {
      api
        .delete(`/api/events/${events.id}`)
        .set('Accept', 'application/json')
        .expect(204, done)
    })
  })

})
