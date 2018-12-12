exports.up = function(knex, Promise){
	return knex.schema.createTable('ratings', table => {
		table.increments().primary()

		table.integer('rating')
		table.integer('client_id').references('id').inTable('clients')
		table.integer('stylist_id').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('ratings')
}
