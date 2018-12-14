const express = require('express')
const database = require('../startup/db.js')
const router = express.Router()
const { authenticate } = require('../middleware/authentication.js')


router.use(express.json())

/**
 * THIS ROUTE WILL RESPOND WITH AN ARRAY OF STYLIST OBJECTS  
 */

router.get('/', async (req, res) => {
	try {
		const stylists = await database('stylists')
		console.log('stylists', stylists);
		res.status(200).json(stylists)
	} catch (e) {
		console.log(e)
		res
			.status(500)
			.json({ error: 'An error occuried while trying to access the database.  Please try the request again.' })
	}
})

/**
 * THIS WILL RESPOND WITH ONE STYLIST OBJECT BASED ON ID
 */

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

/**
 * THIS ROUTE ALLOWS DATA FROM THE STYLIST TO CREATE A NEW STYLIST OBJECT.  SEND THE INFORMATION AS AN OBJECT PASSED IN WITH THE URL TO AXIOS.  AS OF NOW THE ONLY REQUIRED KEYS ARE FIRST_NAME, LAST_NAME, CITY, STATE, ZIP AND NOT PROVIDING THEM IN THE OBJECT WILL THROW A 401.
 */

router.post('/:id', authenticate, async (req, res) => {
	const id = req.params.id;
	const info = req.body;
	const { first_name, last_name, city, state, zip } = req.body;
	info['user_id'] = id;
	if (!first_name || !last_name || !city || !state || !zip) {
		res.status(401).json({ message: 'Please provide all required fields for posting to the database.' })
	}
	else {
		try {
			const newStylist = await database('stylists').insert(info)
			res.status(201).json(newStylist)
		} catch (error) {
			console.log(error)
			res
				.status(500)
				.json({ error: 'An error has occurried while making the request with the database.  Please try again.' })
		}
	}
})

/**
 *  THIS ROUTE WILL DELETE AN ENTIRE STYLIST FROM THE DATABASE IT IS BASED ON THE STYLISTS PRIMARY KEY "ID".
 *  THIS ID IS UNIQUE TO A STYLIST.  IF YOU WANT TO DELETE PARTS OF A STYLIST USE THE PUT ROUTE AND SEND 		EMPTY STRINGS FOR NOW...  (UNLESS REQUIRED THEN IT CANT BE DELETED UNLESS ENTIRE STYLIST IS)
 */

router.delete('/:id', authenticate, async (req, res) => {
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

router.put('/:id', authenticate, async (req, res) => {
	const bodyKeys = Object.keys(req.body)
	if (bodyKeys.length <= 0) {
		res.status(401).json({ errorMessage: 'Please provide field(s) to update.' })
	}
	try {
		const updateCount = await database('stylists').where('id', req.params.id).update(req.body)
		if (updateCount === 0) {
			res.status(404).json({ errorMessage: 'That ID does not exist, please try again.' })
		}
		else {
			res.status(200).json(updateCount)
		}
	} catch (error) {
		res.status(500).json({ error: 'An error has occuried while making the update request, please try again.' })
	}
})

module.exports = router
