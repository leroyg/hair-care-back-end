exports.up = function(knex, Promise){
	return knex.schema.createTable('clients', table => {
		table.increments()

		table.string('first_name').notNullable()
		table.string('last_name').notNullable()
		table.string('comment').references('id').inTable('stylists')
		table.integer('rate_stylist').references('id').inTable('stylists').foreign('stylist_id')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('stylists')
}
