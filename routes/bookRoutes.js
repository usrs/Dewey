const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/books/:search', (req, res) => {
  axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${req.params.search}&jscmd=details&format=json`)
  .then(({ data }) => {
    console.log(data)
    res.json(data);
  })
  .catch(err => {
    console.error(err)
    res.send(err);
  })
})

  module.exports = router
