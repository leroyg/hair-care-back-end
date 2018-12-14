exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('likes').del().then(function(){
		// Inserts seed entries
		return knex('likes').insert([
			{ likes: 30, picture_id: 1 },
			{ likes: 35, picture_id: 2 },
			{ likes: 0, picture_id: 3 },
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
		])
	})
}
