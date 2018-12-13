exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('stylists').del().then(function(){
		// Inserts seed entries
		return knex('stylists').insert([
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '333332223',
				address             : '5820 Stoneridge Mall RD',
				city                : 'Pleasanton',
				state               : 'CA',
				zip                 : 94588,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 65,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
				profile_photo       : 'https://via.placeholder.com/300',
			},
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '323121333',
				address             : '120 W 44th Street',
				city                : 'New York',
				state               : 'NY',
				zip                 : 10036,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 39,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
				profile_photo       : 'https://via.placeholder.com/300',
			},
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '333331233',
				address             : '3255 Main St',
				city                : 'Kansas City',
				state               : 'MO',
				zip                 : 64111,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 20,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
				profile_photo       : 'https://via.placeholder.com/300',
			},
		])
	})
}
