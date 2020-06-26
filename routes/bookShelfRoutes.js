const router = require('express').Router()
const { Book, User } = require('../models')
const passport = require('passport')

 router.get('/bookshelf', passport.authenticate('jwt'), (req, res) => {
  Book.find()
  //needs to populate whole card, come back to this...
   .populate('title')
   .then(books => res.json(books))
   .catch(err => console.error(err))
 })

  module.exports = router
