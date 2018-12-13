exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('portfolio_pictures').del().then(function(){
		// Inserts seed entries
		return knex('portfolio_pictures').insert([
			{ portfolio_picture: null, stylist_id: 1, comment_id: 1 },
			{ portfolio_picture: null, stylist_id: 2, comment_id: 2 },
			{ portfolio_picture: null, stylist_id: 3, comment_id: 1 },
		])
	})
}
