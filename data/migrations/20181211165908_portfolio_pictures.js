exports.up = function(knex, Promise){
	return knex.schema.createTable('pictures', table => {
		table.increments()
			.primary()

		table.binary('picture')
		table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
		table.string('created_at').defaultTo(knex.fn.now());
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('pictures')
}
