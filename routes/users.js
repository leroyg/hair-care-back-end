const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const { generateToken } = require('../middleware/authentication.js')

const database = require('../startup/db.js')

/**
 *  THIS ROUTE IS USED TO REGISTER A USER
 *  SEND A USERNAME KEY AND PASSWORD KEY AND A KEY CALLED ISSTYLIST WHICH IS FLAGGED WITH A BOOLEAN TO 		 
 	IDENTIFY IF THIS REGISTERED USER IS A STYLIST OR NOT ... SEND ALL REQUIREMENTS WITH THE REQUEST BODY
 *  IT WILL RESPOND WITH THE ID OF THE USER AND A SUCCESS MESSAGE
 */

router.post('/register', async function register(req, res){
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

/**
 * THIS ROUTE LOGS A REGISTERED USER IN.  IT MUST HAVE THE USERNAME, PASSWORD, AND A BOOLEAN FOR ISSTYLIST
 * (TRUE MEANS STYLIST ,FALSE IS CLIENT OR NON STYLIST)
 * 
 * THIS ROUTE RESPONDS WITH A USER ID AND A JWT SIGNED ENCODED TOKEN... THE TOKEN MUST BE SENT IN THE REQUEST 	HEADERS AND CAN BE HELD IN LOCAL STORAGE FOR A USER WHICH WILL PERSIST FOR 1HOUR WHEN AT THAT POINT IT 		EXPIRES AND THE USER MUST LOG BACK IN.  YOU CAN LOG A USER OUT BY CLEARING THE TOKEN FROM LOCAL STORAGE 	AND THIS FORCES THEM TO LOG IN AGAIN AND GET A NEW TOKEN
 */

router.post('/login', async function login(req, res){
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
