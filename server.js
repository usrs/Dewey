require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const app = express()
const { User } = require('./models')

// switched public to client and added build (for deployment)
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser((User.deserializeUser()))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
    // .populate('posts')
    .then(user => cb(null, user))
    .catch(err => cb(err))))

app.use(require('./routes'))

// extra route to re-route to homepage **helps with deployment, so routes don't break
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
    useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => app.listen(process.env.PORT || 3001))
 .catch(err => console.error(err))

