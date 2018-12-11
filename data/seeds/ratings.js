exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('ratings').del().then(function(){
		// Inserts seed entries
		return knex('ratings').insert([ { id: 1, rating: 1 }, { id: 2, rating: 4 }, { id: 3, rating: 2 } ])
	})
}
