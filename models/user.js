const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const homeLocationSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true }
})

const userSchema = new mongoose.Schema({
  gender: { type: String },
  phone: { type: String },
  dob: { type: Date },
  age: { type: Number },
  username: { type: String, required: true, unique: true },
  location: { homeLocationSchema },
  picture: { type: String },
  bio: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  event: { type: mongoose.Schema.ObjectId, ref: 'Event' }
})

userSchema.plugin(require('mongoose-unique-validator'))

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    delete json.email
    return json
  }
})

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'does not match')
    }
    next()
  })

userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
    }
    next()
  })

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password)
}


module.exports = mongoose.model('User', userSchema)
