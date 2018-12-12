const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')

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

router.post('/stylists/:id', authenticate, async (req, res) => {
	const { id } = req.params
	const { username } = req.decoded

	try {
		const getId = await database('stylists').where('id', id)
		if (!getId) return res.status(404).json({ message: 'Not found.' })
		try {
			const postIt = await database('comments').insert({
				...req.body,
				stylist_id : id,
				comment_by: username
			})
			res.status(201).json({ id: postIt, comment_by: username, stylist_id: id })
		} catch (error) {
			console.log(error)
			res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

module.exports = router
