exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('reviews').del().then(function(){
		// Inserts seed entries
		return knex('reviews').insert([
			{ review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
			{ review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
			{ review: 'good stuff', stylist_id: 1, review_by: 'Sum One' },
		])
	})
}
