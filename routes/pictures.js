const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')
const moment = require('moment')

/**
 * RESPONDS WITH AN ARRAY OF ALL THE PORTFOLIO PICTURES 
 */
router.get('/', authenticate, async (req, res) => {
	try {
		const data = await database('pictures')
		res.status(200).json(data)
	} catch (e) {
		console.log(e)
		res
			.status(500)
			.json({ error: 'An error occuried while trying to access the database.  Please try the request again.' })
	}
})

/**
 * RESPONDS WITH ONE PORTFOLIO PICTURE BASED ON ITS PORTFOLIO ID 
 */

router.get('/:id', authenticate, async (req, res) => {
	try {
		const byId = await database('pictures').where('id', req.params.id)
		if (!byId) return res.status(404).json({ message: 'ID not found' })
		res.status(200).json(byId)
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH ALL THE PORTFOLIO PICTURES THAT HAVE THE SAME STYLIST_ID (THIS WILL GIVE YOU EVERY PORTFOLIO PICTURE THAT ONE STYLIST HAS ASSOCIATED WITH THEM)
 */

router.get('/stylist/:id', async (req, res) => {
	const { id } = req.params
	try {
		const portPics = await database.select('*').from('pictures').where('stylist_id', id)
		!id ? res.status(404).json({ message: 'That user does not exist. ' }) : res.status(200).json(portPics)
	} catch (e) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH THE SUCCESSFUL POST BODY (CONTAINS PICTURE SCHEMA AND STYLIST ID(WHAT STYLIST IT BELONGS TO)
 * AND ALSO CONTAINS THE TIME STAMPS FOR THE PHOTO BEING CREATED AND MODIFIED
 */

router.post('/stylist/:id', authenticate, async (req, res) => {
	const { id } = req.params

	try {
		const getId = await database('stylists').where('id', id)
		if (!getId) return res.status(404).json({ message: 'Not found.' })
		try {
			const postIt = await database('pictures').insert(req.body)
			res.status(201).json({ postIt, getId })
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
 * THIS ROUTE DELETES ONE PHOTO BASED ON ITS PICTURE ID.  WHEN SUCCESSFUL IT RETURNS DELETEDID: 1 AND A SUCCESS MESSAGE.  IF ID NOT FOUND, IT RESPONDS WITH 404, ALL OTHER ERRORS RESPOND WITH 500.
 */

router.delete('/:id', authenticate, async (req, res) => {
	const { id } = req.params
	try {
		const count = await database('pictures').where('id', id).del()
		if (count === 0) return res.status(404).json({ message: 'ID not found.' })
		res.status(200).json({ count, deleted: 'The photo was deleted successfully.' })
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * THIS ALLOWS ONE PHOTO TO BE UPDATED BY ID.  SUPPLY A JSON IN THE REQUEST BODY WITH "PICTURE" KEY
 * SUCCESSFUL RESPONSE RETURNS 1:integer. 
 */

router.put('/:id', authenticate, async (req, res) => {
	const { id } = req.params
	const changes = req.body
	try {
		const count = await database('pictures').where('id', id)
		if (count.length <= 0) return res.status(404).json({ message: 'ID/User not found.' })
		try {
			if (!req.body.comment) return res.status(400).json({ errorMessage: 'Please provide an updated photo.' })
			const insert = await database('pictures')
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
