const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

// function to get searched books
router.get('/books/:search', (req, res) => {
  axios.get(`https://openlibrary.org/search.json?q=${req.params.search}&jscmd=details&format=json`)
    .then(({ data }) => {
      console.log(data)
      res.json(data);
    })
    .catch(err => {
      console.error(err)
      res.send(err);
    })
})

// function to get book images (doesn't work)
// router.get('/books/:searchimage', (req, res) => {
//   axios.get(`http://covers.openlibrary.org/b/isbn/${req.params.search}-S.jpg`)
//     .then(({ data }) => {
//       console.log(data)
//       res.json(data);
//     })
//     .catch(err => {
//       console.error(err)
//       res.send(err);
//     })
// })

module.exports = router
