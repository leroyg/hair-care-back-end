exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('pictures').del().then(function(){
		// Inserts seed entries
		return knex('pictures').insert([
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 2 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 3 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
			{ picture: 'https://loremflickr.com/320/240/haircut', stylist_id: 1 },
		])
	})
}
