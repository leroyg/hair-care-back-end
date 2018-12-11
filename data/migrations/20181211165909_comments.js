exports.up = function(knex, Promise){
	return knex.schema.createTable('comments', table => {
		table.increments()

		table.string('comment')
		table.integer('stylist_id').references('id').inTable('stylists')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('comments')
}
