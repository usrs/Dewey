const { model, Schema } = require('mongoose')

const Book = new Schema({
 isbn: String,
 title: String,
 author: String,
 publishDate: String,
 publisher: String,
 isLoaned: {
   type: Boolean,
  default: false
  },
  name: String,
  email: String,
  phone: String,
 bookId: String
})

module.exports = model ('Book', Book)
