const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')


/**
 * RESPONDS WITH AN ARRAY OF COMMENT OBJECTS
 */
router.get('/', authenticate, async (req, res) => {
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

/**
 * RESPONDS WITH ONE COMMENT OBJECT BASED ON COMMENT ID 
 */

router.get('/:id', authenticate, async (req, res) => {
	try {
		const byId = await database('comments').where('id', req.params.id)
		if (!byId) return res.status(404).json({ message: 'ID not found' })
		res.status(200).json(byId)
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH ALL THE COMMENT OBJECTS THAT HAVE THE SAME STYLIST_ID (ALL COMMENTS FOR A STYLIST) 
 */

router.get('/stylist/:id', async (req, res) => {
	const { id } = req.params
	try {
		const clients = await database.select('*').from('comments').where('stylist_id', id)
		!id ? res.status(404).json({ message: 'That user does not exist. ' }) : res.status(200).json(clients)
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH THE SUCCESSFUL POST BODY (CONTAINS COMMENT SCHEMA AND STYLIST ID(WHAT STYLIST IT BELONGS TO)
 * AND ALSO CONTAINS WHICH USERNAME THE COMMENT WAS CREATED BY, WITH TIME CREATED AND TIME UPDATED TIMESTAMPS)
 */

router.post('/stylist/:id', authenticate, async (req, res) => {
	const { id } = req.params
	const { username } = req.decoded

	try {
		const getId = await database('stylists').where('id', id)
		if (!getId) return res.status(404).json({ message: 'Not found.' })
		try {
			const postIt = await database('comments').insert({
				...req.body,
				stylist_id : id,
				comment_by : username,
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

/**
 * THIS ROUTE DELETES ONE COMMENT BASED ON ITS COMMENT ID.  WHEN SUCCESSFUL IT RETURNS DELETEDID: 1 AND A SUCCESS MESSAGE.  IF ID NOT FOUND, IT RESPONDS WITH 404, ALL OTHER ERRORS RESPOND WITH 500.
 */

router.delete('/:id', authenticate, async (req, res) => {
	const { id } = req.params
	try {
		const count = await database('comments').where('id', id).del()
		if (count === 0) return res.status(404).json({ message: 'ID not found.' })
		res.status(200).json({ count, deleted: 'The comment was deleted successfully.' })
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

module.exports = router
