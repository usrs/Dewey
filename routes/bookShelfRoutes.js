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
   Book.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.error(err))
 })

//  DELETE a book
router.delete('/bookshelf/:id', passport.authenticate('jwt'), (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

  module.exports = router
