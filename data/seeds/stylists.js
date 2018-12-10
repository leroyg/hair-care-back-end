exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('stylists').del().then(function(){
		// Inserts seed entries
		return knex('stylists').insert([
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '333332223',
				address             : '1600 Pennsylvania Ave',
				city                : 'New York City',
				state               : 'New York',
				zip                 : 10201,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 399999,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
			},
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '323121333',
				address             : '1600 Pensylvania Ave',
				city                : 'New York City',
				state               : 'New York',
				zip                 : 10002,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 399999,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
			},
			{
				first_name          : 'first',
				last_name           : 'last',
				phone_number        : '333331233',
				address             : '1600 Pnnsylvania Ave',
				city                : 'New York City',
				state               : 'New York',
				zip                 : 10011,
				rating              : 3,
				services            : 'stuff',
				specialty           : 'everything',
				average_cost        : 399999,
				social_network_site : 'instagram',
				social_network_link : 'instagram.com',
			},
		])
	})
}
