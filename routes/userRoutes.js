const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// Register Route
router.post('/users/register', (req, res) => {
 const { name, email, username } = req.body
 User.register(new User({ name, email, username }), req.body.password, err => {
  if (err) { console.error(err) }
  res.sendStatus(200)
 })
})

// Login Route
router.post('/users/login', (req, res) => {
 User.authenticate()(req.body.username, req.body.password, (err, user) => {
  if (err) { console.error(err) }
  res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
 })
})

router.get('/users/bookshelf ', passport.authenticate('jwt'), (req, res) => {
 res.json(req.user)
})

module.exports = router
