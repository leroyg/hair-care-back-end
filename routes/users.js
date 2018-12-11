const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const { generateToken } = require('../middleware/authentication.js')

const database = require('../startup/db.js')





router.use('/register', async function register(req, res){
	if (!req.body.username || !req.body.password) {
		res.status(401).json({ message: 'Please provide a username and a password to register.' })
	}
	const creds = req.body
	const hash = bcrypt.hashSync(creds.password, 14)
	creds.password = hash

	try {
		const id = await database('users').insert(creds)
		res.status(201).json({ id, success: 'Success.  User registered.' })
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An error has occuried while trying to register with the database.' })
	}
})
router.use('/login', async function login(req, res){
	try {
		const creds = req.body
		const user = await database('users').where('username', '=', creds.username).first()
		if (user && bcrypt.compareSync(creds.password, user.password)) {
			const token = generateToken(user)
			res.status(201).json({ id: user.id, token })
		}
		else {
			res.status(401).json({ message: 'Unauthorized Request.  Please register for an account.' })
		}
	} catch (e) {
		console.log(e)
		res.status(500).json({ error: 'An error occuried while trying to attempt this process with the database.' })
	}
})

module.exports = router