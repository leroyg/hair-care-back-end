exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('likes').del().then(function(){
		// Inserts seed entries
		return knex('likes').insert([
			{ id: 1, liked: false },
			{ id: 2, liked: true },
			{ id: 3, liked: false },
		])
	})
}
