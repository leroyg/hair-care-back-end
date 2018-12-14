exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('comments').del().then(function(){
		// Inserts seed entries
		return knex('comments').insert([
			{ comment: 'you da best', picture_id: 2 },
			{ comment: 'cool', picture_id: 1 },
			{ comment: 'k', picture_id: 3 },
			{ comment: 'you da best', picture_id: 2 },
			{ comment: 'another comment', picture_id: 1 },
			{ comment: 'generic comment', picture_id: 3 },
			{ comment: 'lallalalalalalalalalala', picture_id: 2 },
			{ comment: 'a nice pic!', picture_id: 1 },
			{ comment: 'HIIII!!!', picture_id: 3 },
			{ comment: 'yo DA worst', picture_id: 2 },
			{ comment: 'ALALALALALALALLALALALALA', picture_id: 1 },
			{ comment: 'HEY', picture_id: 3 },
		])
	})
}
