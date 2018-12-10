exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('users').truncate().then(function(){
		// Inserts seed entries
		return knex('users').insert([
			{ id: 1, username: 'myusernamdfde', password: 'apass', isStylist: true },
			{ id: 2, username: 'myusesdfsdrname', password: 'apass', isStylist: false },
			{ id: 3, username: 'myusernsssame', password: 'apass', isStylist: false },
		])
	})
}
