exports.up = function(knex, Promise){
	return knex.schema.createTable('stylists', table => {
		table.increments().primary()

		table.string('first_name', 128).notNullable().defaultTo("")
		table.string('last_name', 128).notNullable().defaultTo("")
		table.string('phone_number', 15).unique()
		table.string('address')
		table.string('city').notNullable().defaultTo("")
		table.string('state').notNullable().defaultTo("")
		table.integer('zip').unsigned().notNullable().defaultTo(5)
		table.integer('rating').unsigned()
		table.string('services')
		table.string('specialty', 128)
		table.integer('average_cost').unsigned()
		table.string('social_network_link', 128)
		table.string('social_network_site', 128)
		table.binary('profile_photo')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('stylists')
}
