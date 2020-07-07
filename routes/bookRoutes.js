const router = require('express').Router()
const axios = require('axios')
const { Book } = require('../models')

// function to get searched books
router.get('/books/:search', (req, res) => {
  axios.get(`https://openlibrary.org/search.json?q=${req.params.search}&jscmd=details&format=json`)
    .then(({ data }) => {
      res.json(data)
      // console.log the data being returned 
      console.log(data)

      //filter array to make sure 'save button' doesn't match any of the items we have stored
      // Book.find()
      //   .then(books => {
      //     const booksFiltered = data.docs[0].filter(book => {
      //       let keep = true
      //       books.forEach(saved => {
      //         if (saved.bookId === book.id_amazon) {
      //           keep = false
      //         }
      //       })
      //       return keep
      //     })
      //     res.json(booksFiltered)
      //   })
      //   .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
})

// function to get book images (doesn't work)
router.get('/books/image/:searchimage', (req, res) => {
  axios.get(`http://covers.openlibrary.org/b/isbn/${req.params.search}-S.jpg`)
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
