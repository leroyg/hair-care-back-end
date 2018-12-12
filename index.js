const express = require('express')
const globalMiddleware = require('./middleware/globalMiddleware.js')
const api = require('./api/api.js')

const server = express()
server.use(globalMiddleware, api)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
