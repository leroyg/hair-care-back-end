const morgan = require('morgan')
const express = require('express')
const winston = require('./config/winston')
const helmet = require('helmet')
const cors  = require('cors')
const stylists = require('./routes/stylists.js')


const server = express()
server.use(cors())
server.use(helmet())
server.use(morgan('combined', { stream: winston.stream }))

server.use('/api/stylists', stylists)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
