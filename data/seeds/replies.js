exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('replies').del().then(function(){
		// Inserts seed entries
		return knex('replies').insert([ { reply: 'thx' }, { reply: 'thx' }, { reply: 'thx' } ])
	})
}
