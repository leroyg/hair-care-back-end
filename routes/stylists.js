const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')

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

router.post('/', async (req, res) => {
	const { first_name, last_name, city, state, zip } = req.body
	if (!first_name || !last_name || !city || !state || !zip) {
		res.status(401).json({ message: 'Please provide all required fields for posting to the database.' })
	}
	else {
		try {
			const newStylist = await database('stylists').insert(req.body)
			res.status(201).json(newStylist)
		} catch (error) {
			console.log(error)
			res
				.status(500)
				.json({ error: 'An error has occurried while making the request with the database.  Please try again.' })
		}
	}
})

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const stylistID = await database('stylists').where('id', id).del()
		!id
			? res.status(404).json({ message: 'The associated ID was not found in the system, please try again' })
			: res.status(200).json({ success: stylistID })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'An error has occuried while making the request to the database, please try again.' })
	}
})

module.exports = router
