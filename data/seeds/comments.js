exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('comments').del().then(function(){
		// Inserts seed entries
		return knex('comments').insert([
			{ id: 1, comment: 'you da best', stylist_id: 1 },
			{ id: 2, comment: 'cool', stylist_id: 2 },
			{ id: 3, comment: 'k' , stylist_id: 1},
		])
	})
}
