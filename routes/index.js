const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))

module.exports = router
