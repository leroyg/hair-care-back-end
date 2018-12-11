require('dotenv').config()
// const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
// const winston = require('./config/winston')
const stylists = require('./routes/stylists.js')

const enableCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
	res.header('Access-Control-Allow-Headers', 'Content-Type')
	next()
}

const corsOptions = {
	origin               : function(origin, callback){
		if (origin === process.env.FRONTEND_URL || !origin) {
			callback(null, true)
		}
		else {
			callback(new Error('Not allowed by CORS'))
		}
	},
	optionsSuccessStatus : 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const server = express()
server.use(cors())
server.use(helmet())
// server.use(morgan('combined', { stream: winston.stream }))
server.use(enableCors)
server.use(cors(corsOptions))
server.use(helmet())

server.use('/api/stylists', stylists)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
