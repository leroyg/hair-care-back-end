exports.up = function(knex, Promise){
	return knex.schema.createTable('clients', table => {
		table.increments()

		table.string('first_name').notNullable()
		table.string('last_name').notNullable()
		table.string('comment').references('id').inTable('stylists')
		table.string('stylist_rating').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('clients')
}
