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
		.join('users', 'pictures.user_id', '=', 'users.id')
		.select('pictures.id', 'pictures.picture', 'pictures.created_at', 'users.username')
		for (let i = 0; i < data.length; i++) {
			data[i].picture = data[i].picture.toString('utf8')
		}
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
		console.log('byId', byId)
		res.status(200).json(byId)
	} catch (error) {
		res.status(500).json({ error: 'An unexpected error has occuried.  Please try again.' })
	}
})

/**
 * RESPONDS WITH ALL THE PORTFOLIO PICTURES THAT HAVE THE SAME STYLIST_ID (THIS WILL GIVE YOU EVERY PORTFOLIO PICTURE THAT ONE STYLIST HAS ASSOCIATED WITH THEM)
 */

router.get('/stylist/:id', authenticate, async (req, res) => {
	const { id } = req.params
	try {
		const portPics = await database.select('*').from('pictures').where('user_id', id)
		for (let i = 0; i < portPics.length; i++) {
			portPics[i].picture = portPics[i].picture.toString('utf8')
		}
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
	let getId
	let newPicID

	try {
		await database('stylists').where('user_id', id)
		.then(function (result) {
			getId = result[0];
		})
		if (!getId) return res.status(404).json({ message: 'Not found.' })
		try {
			await database('pictures').insert(req.body).returning('id')
			.then(function (result) {
				newPicID = result[0];
			})
			const newPic = { likes: 0, picture_id: newPicID };
			await database('likes').insert(newPic);
			res.status(201).json({ getId })
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
