const { model, Schema } = require('mongoose')

const Book = new Schema({
 isbn: String,
 title: String,
 author: String,
 publishDate: String,
 publisher: String,
 pages: Number,
 
})

module.exports = model ('Book', Book)
