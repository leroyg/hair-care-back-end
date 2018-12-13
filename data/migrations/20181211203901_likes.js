exports.up = function(knex, Promise){
	return knex.schema.createTable('likes', table => {
		table.increments().primary()

		table.integer('likes').unsigned().notNullable()
		table.integer('picture_id').notNullable().references('id').inTable('portfolio_pictures').onDelete('CASCADE').index()
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('likes')
}
