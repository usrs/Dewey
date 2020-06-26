const { model, Schema } = require('mongoose')

const Book = new Schema({
 isbn: String,
 title: String,
 author: String,
 pages: Number,
 image: String
})

module.exports = model ('Book', Book)
