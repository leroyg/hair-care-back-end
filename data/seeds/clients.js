exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('clients').del().then(function(){
		// Inserts seed entries
		return knex('clients').insert([
			{ id: 1, first_name: 'A', last_name: 'F' },
			{ id: 2, first_name: 'B', last_name: 'E' },
			{ id: 3, first_name: 'C', last_name: 'D' },
		])
	})
}
