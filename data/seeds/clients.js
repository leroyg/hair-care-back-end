exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('clients').del().then(function(){
		// Inserts seed entries
		return knex('clients').insert([
			{ id: 1, first_name: 'A', last_name: 'F', comment: 'you rock!', stylist_rating: '2' },
			{ id: 2, first_name: 'B', last_name: 'E', comment: 'thanks!', stylist_rating: '2' },
			{ id: 3, first_name: 'C', last_name: 'D', comment: 'best ever!', stylist_rating: '2' },
		])
	})
}
