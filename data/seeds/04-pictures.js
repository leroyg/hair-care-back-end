exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('pictures').del().then(function(){
		// Inserts seed entries
		return knex('pictures').insert([
			{ picture: null, stylist_id: 1 },
			{ picture: null, stylist_id: 2 },
			{ picture: null, stylist_id: 1 },
		])
	})
}
