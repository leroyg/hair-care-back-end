exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('portfolio_pictures').del().then(function(){
		// Inserts seed entries
		return knex('portfolio_pictures').insert([
			{ id: 1, portfolio_picture: null, stylist_id: 1 },
			{ id: 2, portfolio_picture: null, stylist_id: 2 },
			{ id: 3, portfolio_picture: null, stylist_id: 3 },
		])
	})
}
