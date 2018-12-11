const morgan = require('morgan')
const express = require('express')
const winston = require('./config/winston')
const stylists = require('./routes/stylists.js')

const server = express()

server.use(morgan('combined', { stream: winston.stream }))

server.use('/api/stylists', stylists)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
