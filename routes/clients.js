const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')

/**
 * USE IF YOU WANT TO DO ANYTHING WITH A LIST OF NON STYLIST DATA 
 */

router.get('/', authenticate, async (req, res) => {
	try {
		const clients = await database('clients')
		res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		res
			.status(500)
			.json({ error: 'An error occuried while trying to access the database.  Please try the request again.' })
	}
})

/**
 * USE IF YOU WANT TO DO ANYTHING WITH ONE NON STYLIST OBJECT BY ID
 */

router.get('/:id', authenticate, async (req, res) => {
	const { id } = req.params
	try {
		const clients = await database.select('*').from('clients').where('id', id)
		!id ? res.status(404).json({ message: 'That user does not exist. ' }) : res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})


module.exports = router