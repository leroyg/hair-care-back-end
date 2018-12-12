exports.up = function(knex, Promise){
	return knex.schema.createTable('replies', table => {
		table.increments()

		table.string('reply')
		table.integer('client_id').references('id').inTable('clients')
		table.integer('stylist_id').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('replies')
}
