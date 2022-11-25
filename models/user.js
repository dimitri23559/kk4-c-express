const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')
const UserSchema = new mongose.Schema({
  name: {
    type: String,
    required: [true, 'Silahkan masukkan nama'],
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan masukkan email valid']
  }
})

module.exports = mongoose.model('User', UserSchema)