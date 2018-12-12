exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('reviews').del().then(function(){
		// Inserts seed entries
		return knex('reviews').insert([
			{ id: 1, review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
			{ id: 2, review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
			{ id: 3, review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
		])
	})
}
