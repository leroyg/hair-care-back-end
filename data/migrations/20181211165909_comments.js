exports.up = function(knex, Promise){
	return knex.schema.createTable('comments', table => {
		table.increments().primary()

		table.string('comment').notNullable().defaultTo('')
		table.integer('stylist_id').notNullable().references('id').inTable('stylists').onDelete('CASCADE').index()
		table.string('comment_by').notNullable().defaultTo('')
		table.string('picture_id').notNullable().references('id').inTable('portfolio_pictures').onDelete('CASCADE').index()
		table.timestamps(true, true)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('comments')
}
