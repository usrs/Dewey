const { model, Schema } = require('mongoose')

const User = new Schema({
 username: String,
 email: String,
 name: String,
 books: [{
  type: Schema.Types.ObjectId,
  ref: 'Book'
 }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
