exports.up = function(knex, Promise){
	return knex.schema.createTable('comments', table => {
		table.increments()
			.primary()

		table.string('comment').notNullable().defaultTo('')
		table.integer('stylist_id').references('id').inTable('stylists').onDelete('CASCADE').index()
		table.timestamps(true,true)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('comments')
}
