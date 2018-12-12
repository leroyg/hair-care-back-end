exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('comments').del().then(function(){
		// Inserts seed entries
		return knex('comments').insert([
			{ comment: 'you da best', picture_id: 2 },
			{ comment: 'cool', picture_id: 1 },
			{ comment: 'k', picture_id: 2 },
		])
	})
}
