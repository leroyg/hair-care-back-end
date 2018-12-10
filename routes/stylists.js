const express = require('express')
const router = express.Router()
const database = require('../startup/db.js')

router.use(express.json())

router.get('/', async (req, res) => {
	try {
		const stylists = await database('stylists')
		res.status(200).json(stylists)
	} catch (e) {
		console.log(e)
		res
			.status(500)
			.json({ error: 'An error occuried while trying to access the database.  Please try the request again.' })
	}
})

router.get('/:id', async (req,res) => {
	if (!req.body.params) {res.status(404).json({errorMessage: "That user does not exist."})}
	try {
		const stylist = await database('stylists').where('id', '=', req.body.params)
		res.status(200).json(stylist)
	} catch(e) {
		console.log(e)
		res.status(500).json({error: "An error occuried while accessing the database, please try again."})
	}
})

module.exports = router
