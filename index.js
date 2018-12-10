const winston = require('winston')
const express = require('express')
const app = express()
const router = express.Router()
const logging = require('./startup/logging')
const routes = require('./startup/routes')
const db = require('./startup/db.js')

router.use(app)
router.use(routes)
router.use(logging)
router.use(db)

const port = process.env.PORT || 5000
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`))

module.exports = server
