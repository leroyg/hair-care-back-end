exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('users').truncate().then(function(){
		// Inserts seed entries
		return knex('users').insert([
			{ username: 'myusernamdfde', password: 'apass', isStylist: true },
			{ username: 'myusesdfsdrname', password: 'apass', isStylist: false },
			{ username: 'myusernsssame', password: 'apass', isStylist: false },
		])
	})
}
