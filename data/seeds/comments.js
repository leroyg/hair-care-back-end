exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('comments').del().then(function(){
		// Inserts seed entries
		return knex('comments').insert([
			{ comment: 'you da best', stylist_id: 1, picture_id: 2 },
			{ comment: 'cool', stylist_id: 2, picture_id: 1 },
			{ comment: 'k', stylist_id: 1, picture_id: 2 },
		])
	})
}
