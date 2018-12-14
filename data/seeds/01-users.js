exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('users').del().then(function(){
		// Inserts seed entries
		return knex('users').insert([
			{ username: 'BOT #1', password: 'apass', isStylist: true },
			{ username: 'BOT #2', password: 'apass', isStylist: false },
			{ username: 'BOT #3', password: 'apass', isStylist: false },
		])
	})
}
