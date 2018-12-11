const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const authentication = require('../middleware/authentication.js')



router.get('/', async (req, res) => {
	try {
		const data = await database('comments')
		res.status(200).json(data)
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
		const clients = await database.select('*').from('comments').where('stylist_id', id)
		!id ? res.status(404).json({ message: 'That user does not exist. ' }) : res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})


module.exports = router
