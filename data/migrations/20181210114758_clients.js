exports.up = function(knex, Promise){
	return knex.schema.createTable('clients', table => {
		table.increments()

		table.string('first_name').notNullable()
		table.string('last_name').notNullable()
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('clients')
}
