const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

router.get('/books/:search', (req, res) => {
 axios.get('API URL HERE')
  .then(({ data }))
})

  module.exports = router
