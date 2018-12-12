router.post('/:id/rating', authenticate, async (req, res) => {
	try {
		const findId = await database('stylists').where('id', req.params.id)
		if (findId.length === 0) {
			res.status(404).json({ message: 'bad request' })
		}
		else {
			try {
				const post = await database('ratings').insert({ ...req.body, stylist_id: req.params.id })
				res.status(200).json(post)
			} catch (error) {
				console.log(error)
				res.status(500).json({ error: 'An error has occuried while requesting the server.  Please try again.' })
			}
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'An error has occuried while requesting the server.  Please try again.' })
	}
})
