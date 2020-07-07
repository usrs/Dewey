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

module.exports = router
