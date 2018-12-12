const express = require('express')
const stylists = require('../routes/stylists.js')
const clients = require('../routes/clients.js')
const users = require('../routes/users.js')
const comments = require('../routes/comments.js')
const reviews = require('../routes/reviews.js')
const ratings = require('../routes/ratings.js')
const portfolioPictures = require('../routes/portfolio_photos.js')

const server = express.Router()

server.use('/api/stylists', stylists)
server.use('/api/clients', clients)
server.use('/api', users)
server.use('/api/comments', comments)
server.use('/api/reviews', reviews)
server.use('/api/ratings', ratings)
server.use('/api/portfolioPictures', portfolioPictures)

module.exports = server
