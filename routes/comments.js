const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')
const moment = require('moment')

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
 * RESPONDS WITH ALL THE COMMENT OBJECTS THAT HAVE THE SAME PICTURE_ID (ALL COMMENTS FOR A PICTURE) 
 */

router.get('/picture/:id', authenticate , async (req, res) => {
	const { id } = req.params
	try {
		const comments = await database.select('*').from('comments').where('comments.picture_id', id).join('likes', 'comments.id', 'likes.picture_id')
		if (!id) return res.status(404).json({ message: 'That picture does not exist. ' })
		return res.status(200).json(comments)
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH THE SUCCESSFUL POST BODY (CONTAINS COMMENT SCHEMA AND STYLIST ID(WHAT STYLIST IT BELONGS TO)
 * AND ALSO CONTAINS WHICH USERNAME THE COMMENT WAS CREATED BY, WITH TIME CREATED AND TIME UPDATED TIMESTAMPS)
 */

router.post('/picture/:id', authenticate, async (req, res) => {
	const { id } = req.params
	const { username } = req.decoded

	try {
		const getId = await database('portfolio_pictures').where('id', id)
		if (!getId) return res.status(404).json({ message: 'Not found.' })
		try {
			const postIt = await database('comments').insert({
				...req.body,
				picture_id : id,
				comment_by : username,
			})
			res.status(201).json({ id: postIt, comment_by: username, picture_id: id })
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

/**
 * THIS ALLOWS ONE COMMENT TO BE UPDATED BY ID.  SUPPLY A JSON IN THE REQUEST BODY WITH "COMMENT" KEY
 * SUCCESSFUL RESPONSE RETURNS 1:integer. COMMENT IS ALSO CHECKED BY USERNAME OF COMMENTED_BY IN ADDITION TO UNIQUE COMMENT ID--- ERRORS ARE HANDLED AS EXPECTED
 */

router.put('/:id', authenticate, async (req, res) => {
	const { id } = req.params
	const changes = req.body
	const { username } = req.decoded.username
	try {
		const count = await database('comments').where('id', id)
		if (count.length <= 0 && count.comment_by !== username)
			return res.status(404).json({ message: 'ID/User not found.' })
		try {
			if (!req.body.comment) return res.status(400).json({ errorMessage: 'Please provide an updated comment.' })
			const insert = await database('comments')
				.where('id', id)
				.update({ ...changes, updated_at: moment().format('YYYY-DD-MM HH:mm:ss') })
			res.status(200).json({ insert, success: 'Success!' })
		} catch (error) {
			res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
		}
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

module.exports = router
