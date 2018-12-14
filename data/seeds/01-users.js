exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('users').del().then(function(){
		// Inserts seed entries
		return knex('users').insert([
			{ username: 'Alan', password: 'apass', isStylist: true },
			{ username: 'Ben', password: 'apass', isStylist: false },
			{ username: 'Chris', password: 'apass', isStylist: false },
		])
	})
}
