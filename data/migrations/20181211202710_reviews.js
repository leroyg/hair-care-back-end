exports.up = function(knex, Promise){
	return knex.schema.createTable('reviews', table => {
		table.increments()

		table.string('review')
		table.integer('stylist_id').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('reviews')
}
