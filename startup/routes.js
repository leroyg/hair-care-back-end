const express = require('express')
const login = require('../routes/login')
const register = require('../routes/register')
const stylists = require('../routes/stylists')
const users = require('../routes/users')
const auth = require('../routes/auth')
const error = require('../middleware/error')
const globalMiddleWare = require('../middleware/globalMiddleware')

module.exports = function(app){
	app.use(express.json())
	app.use('/api/auth', auth)
	app.use('/api/login', login)
	app.use('/api/register', register)
	app.use('/api/users', users)
	app.use('/api/stylists', stylists)
	app.use(globalMiddleWare)
	app.use(error)
}
