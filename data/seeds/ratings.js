exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('ratings').del().then(function(){
		// Inserts seed entries
		return knex('ratings').insert([ { rating: 1 }, { rating: 4 }, { rating: 2 } ])
	})
}
