exports.up = function(knex, Promise){
	return knex.schema.createTable('reviews', table => {
		table.increments()
			.primary()

		table.string('review').notNullable().defaultTo('')
		table.integer('stylist_id').notNullable().references('id').inTable('stylists').onDelete('CASCADE').index()
		table.string('review_by').notNullable().defaultTo('')
		table.timestamps(true,true)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('reviews')
}
