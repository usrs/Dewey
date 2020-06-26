const router = require('express').Router()

router.use('/api', require('./isbnRoutes.js'))

module.exports = router
