require('dotenv').config
const express = require('express')
Const { join } = require('path')
Const app = express()

app.use(require(‘./routes’))

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('mongoose').connect('process.env.MONGODB_URI || process.env.LOCAL_URI, {
    useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => app.listen(process.env.PORT || 3001))
 .catch(err => console.error(err))

app.get('*', (req, res) => {
 res.sendFile(join(_dirname, 'client', 'build', 'index.html'))
})