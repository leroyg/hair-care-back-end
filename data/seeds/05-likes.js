exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('likes').del().then(function(){
		// Inserts seed entries
		return knex('likes').insert([
			{ likes: 30, picture_id: 3 },
			{ likes: 35, picture_id: 1 },
			{ likes: 0, picture_id: 2 },
			{ likes: 40, picture_id: 4 },
			{ likes: 43, picture_id: 5 },
			{ likes: 43, picture_id: 6 },
			{ likes: 33, picture_id: 7 },
			{ likes: 3, picture_id: 8 },
			{ likes: 4344, picture_id: 9 },
			{ likes: 453, picture_id: 10 },
			{ likes: 43, picture_id: 11 },
			{ likes: 43, picture_id: 12 },
			{ likes: 33, picture_id: 13 },
			{ likes: 43, picture_id: 14 },
			{ likes: 43, picture_id: 15 },
			{ likes: 4, picture_id: 16 },
			{ likes: 43, picture_id: 17 },
			{ likes: 45, picture_id: 18 },
			{ likes: 44, picture_id: 19 },
			{ likes: 37, picture_id: 20 },
			{ likes: 36, picture_id: 21 },
			{ likes: 43, picture_id: 22 },
			{ likes: 43, picture_id: 23 },
			{ likes: 433, picture_id: 24 },
			{ likes: 223, picture_id: 25 },
			{ likes: 13, picture_id: 26 },
			{ likes: 13, picture_id: 27 },
			{ likes: 23, picture_id: 28 },
			{ likes: 33, picture_id: 29 },
			{ likes: 1, picture_id: 30 },
			{ likes: 0, picture_id: 31 },
		])
	})
}
