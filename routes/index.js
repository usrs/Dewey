const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./bookShelfRoutes.js'))

module.exports = router
