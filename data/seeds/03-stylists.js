exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('stylists').del().then(function(){
		// Inserts seed entries
		return knex('stylists').insert([
			{
				first_name : 'BOT #1',
				last_name  : 'Alenson',
				address    : '5820 Stoneridge Mall RD',
				city       : 'Pleasanton',
				state      : 'CA',
				zip        : 94588,
				user_id    : 1,
			},
			{
				first_name : 'BOT #2',
				last_name  : 'Brianson',
				address    : '120 W 44th Street',
				city       : 'New York',
				state      : 'NY',
				zip        : 10036,
				user_id    : 2,
			},
			{
				first_name : 'BOT #3',
				last_name  : 'Chrison',
				address    : '3255 Main St',
				city       : 'Kansas City',
				state      : 'MO',
				zip        : 64111,
				user_id    : 3,
			},
		])
	})
}
