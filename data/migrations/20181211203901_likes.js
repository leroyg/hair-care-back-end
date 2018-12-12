exports.up = function(knex, Promise){
	return knex.schema.createTable('likes', table => {
		table.increments().primary()

		table.boolean('liked')
		table.integer('stylist_id').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('likes')
}
