const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()

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

router.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const stylist = await database.select('*').from('stylists').where('id', id)
		!id ? res.status(404).json({ message: 'That user does not exist. ' }) : res.status(200).json(stylist)
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

module.exports = router
