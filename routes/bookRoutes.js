const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/books/:search', (req, res) => {
 axios.get(`/books/${req.params.search}`, {
   params: {
      Authorization: process.env.API_KEY
   }
 })
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.error(err))
})

  module.exports = router
