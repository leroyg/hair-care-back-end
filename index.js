const winston = require('winston')
const express = require('express')
const server = express()
const router = express.Router()
const logging = require('./startup/logging')
const routes = require('./startup/routes')
const knex = require('knex')
const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)


server.get('/api/stylists', async(req,res) => {
    const stylists = await db('stylists')
    res.status(200).json(stylists)
})

const port = process.env.PORT || 5000

server.listen(port, () => console.log('ok'))