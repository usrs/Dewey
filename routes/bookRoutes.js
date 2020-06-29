const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/books/:search', (req, res) => {
  axios.get(`https://api2.isbndb.com/book/${req.params.search}?Authorization=${process.env.API_KEY}`)
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.error(err))
})

  module.exports = router
