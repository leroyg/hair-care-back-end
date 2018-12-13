require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const enableCors = function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,POST, PUT, DELETE')
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

server.use(express.json())
server.use(enableCors)
server.use(cors(corsOptions))
server.use(helmet())

module.exports = server
