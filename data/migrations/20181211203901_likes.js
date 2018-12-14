exports.up = function(knex, Promise){
	return knex.schema.createTable('likes', table => {
		table.increments().primary()

		table.integer('likes').unsigned().notNullable().defaultTo(0)
		table.integer('picture_id').notNullable().references('id').inTable('pictures').onDelete('CASCADE').index()
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('likes')
}
