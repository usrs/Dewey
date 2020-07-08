const router = require('express').Router()
const { Book, User } = require('../models')
const passport = require('passport')

// GET user library
router.get('/bookshelf', passport.authenticate('jwt'), (req, res) => {
  User.findById(req.user._id)
  //needs to populate whole card, come back to this...
    .populate('books')
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
     publisher: req.body.publisher,
     bookId: req.body.bookId
    })
    .then(book => {
      User.findByIdAndUpdate(req.user._id, { $push: {books: book._id }})
        .then(() => res.json ({
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          publishDate: book.publishDate,
          publisher: book.publisher,
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

//  POST a book loan
router.post('/bookshelf/loan/:id', passport.authenticate('jwt'), (req, res) => {

  Book.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    isLoaned: true,
  })
    .then((book) => {
      res.json({
        isbn: book._id,
        isLoaned: book.isLoaned
      })
    })
    .catch((err) => res.status(500).send(err))
})

//  POST a book loan
router.post('/bookshelf/returnBook/:id', passport.authenticate('jwt'), (req, res) => {

  Book.findByIdAndUpdate(req.params.id, { $unset: {
    name: "",
    phone: "",
    email: ""
    }
  })
    .then(
      Book.findByIdAndUpdate(req.params.id, {
        isLoaned: false
      })
    )
    .then((book) => {
      res.json({
        isbn: book._id,
        isLoaned: book.isLoaned
      })
    })
    .catch((err) => res.status(500).send(err))
})

router.put('/bookshelf/loan/:id', passport.authenticate('jwt'), (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

  module.exports = router
