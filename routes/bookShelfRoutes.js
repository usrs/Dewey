const router = require('express').Router()
const { Book, User } = require('../models')
const passport = require('passport')

// GET user library
router.get('/bookshelf', passport.authenticate('jwt'), (req, res) => {
  Book.find()
  //needs to populate whole card, come back to this...
   .populate('title')
   .then(books => res.json(books))
   .catch(err => console.error(err))
 })

//  POST a book
router.post('/bookshelf', passport.authenticate('jwt'), (req, res) => {
   Book.create({
     isbn: req.body.isbn,
     title: req.body.title,
     author: req.body.author,
     publishDate: req.body.publishDate,
     publsiher: req.body.publisher,
     bookId: req.body.bookId
    })
    .then(book => {
      User.findByIdAndUpdate(req.user._id, { $push: {books: book._id }})
        .then(() => res.json ({
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          publishDate: book.publishDate,
          publsiher: book.publisher,
          bookId: book.bookId
        }))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
 })

//  DELETE a book
router.delete('/bookshelf/:id', passport.authenticate('jwt'), (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

  module.exports = router
