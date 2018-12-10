exports.seed = function(knex, Promise){
	// Deletes ALL existing entries
	return knex('clients').truncate().then(function(){
		// Inserts seed entries
		return knex('clients').insert(
			{ id: 1, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 2, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 3, first_n2me: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '1' },
			{ id: 4, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 5, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 6, first_n2me: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '1' },
			{ id: 7, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 8, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
			{ id: 9, first_n2me: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '1' },
			{ id: 10, first_name: 'first', last_name: 'last', comment: 'you rock!', stylist_rating: '2' },
		)
	})
}
