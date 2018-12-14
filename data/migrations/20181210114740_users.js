exports.up = function(knex, Promise){
	return knex.schema.createTable('users', table => {
		table.increments().primary()

		table.string('username').notNullable()
		table.string('password').notNullable()
		table.boolean('isStylist')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('users')
}
