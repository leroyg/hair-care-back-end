exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('likes').del().then(function(){
		// Inserts seed entries
		return knex('likes').insert([ { liked: false }, { liked: true }, { liked: false } ])
	})
}
