const express = require('express')
const stylists = require('./routes/stylists.js')

const server = express() 
server.use(express.json())

server.use('/api/stylists', stylists)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
