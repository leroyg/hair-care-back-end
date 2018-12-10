const express = require('express')
const router = express.Router()
const database = require('../startup/db.js')

router.get('/', async (req, res, next) => {
	try {
		const stylists = await database.select('*').from('stylists')
		res.status(200).json(stylists)
	} catch (e) {
		console.log(e)
		res
			.status(500)
			.json({ error: 'An error occuried while trying to access the database.  Please try the request again.' })
	}
})

module.exports = router
