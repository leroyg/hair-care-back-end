exports.up = function(knex, Promise){
	return knex.schema.createTable('comments', table => {
		table.increments().primary()

		table.string('comment').notNullable().defaultTo('')
		table.string('comment_by').notNullable().defaultTo('')
		table.integer('picture_id').notNullable().references('id').inTable('pictures').onDelete('CASCADE').index()
		table.timestamps(true, false)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('comments')
}
