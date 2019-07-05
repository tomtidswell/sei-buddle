const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String, required: false },
  city: { type: String, required: true },
  postcode: { type: String, required: true }

})

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref:'User' }
})

const attendeesSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Attendees', autopopulate: true }
})

const eventSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  location: [locationSchema, { required: false }],
  postcode: { type: String, required: true },
  comments: [commentSchema],
  attendees: [ attendeesSchema ],
  user: { type: mongoose.Schema.ObjectId, ref:'User' }
}, {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Event', eventSchema)
