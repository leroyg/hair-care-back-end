const express = require('express')
const stylists = express.Router()
const server = express()
const db = require('../startup/db.js')

server.get('/', async (req, res) => {
	const stylists = await db('stylists')
	res.status(200).json(stylists)
})

module.exports = (stylists) => {
    stylists.use(server)
}