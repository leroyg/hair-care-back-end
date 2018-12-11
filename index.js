const morgan = require('morgan')
const express = require('express')
const winston = require('./config/winston')
const helmet = require('helmet')
const cors  = require('cors')
const stylists = require('./routes/stylists.js')
const globalMiddleWare = require('./middleware/globalMiddleware.js')


const server = express()
<<<<<<< HEAD
<<<<<<< HEAD
server.use(cors())
server.use(helmet())
=======
>>>>>>> development
=======
>>>>>>> 639210b383452c0e7426713083cb59a905ce5be6
server.use(morgan('combined', { stream: winston.stream }))
server.use(globalMiddleWare)

server.use('/api/stylists', stylists)

const port = process.env.PORT || 5000

server.listen(port, () => {
	console.log(`//============== Server is active on port ${port} =======================//`)
})
