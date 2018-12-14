exports.up = function(knex, Promise){
	return knex.schema.createTable('stylists', table => {
		table.increments().primary()

		table.string('first_name', 128).notNullable().defaultTo('')
		table.string('last_name', 128).notNullable().defaultTo('')
		table.string('address').notNullable()
		table.string('city').notNullable().defaultTo('')
		table.string('state').notNullable().defaultTo('')
		table.integer('zip').unsigned().notNullable().defaultTo(5)
		table.binary('profile_photo').defaultTo('https://via.placeholder.com/300')
		table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index()
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('stylists')
}
