exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('clients').del().then(function(){
		// Inserts seed entries
		return knex('clients').insert([
			{ first_name: 'A', last_name: 'F' },
			{ first_name: 'B', last_name: 'E' },
			{ first_name: 'C', last_name: 'D' },
		])
	})
}
