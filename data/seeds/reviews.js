exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('reviews').del().then(function(){
		// Inserts seed entries
		return knex('reviews').insert([
			{ id: 1, review: 'best work', stylist_id: 1 },
			{ id: 2, review: 'awesome stylist', stylist_id: 2 },
			{ id: 3, review: 'the best ever' , stylist_id: 1},
		])
	})
}
