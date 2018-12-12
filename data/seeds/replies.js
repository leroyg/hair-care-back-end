exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('replies').del().then(function(){
		// Inserts seed entries
		return knex('replies').insert([ { id: 1, reply: 'thx' }, { id: 2, reply: 'thx' }, { id: 3, reply: 'thx' } ])
	})
}
