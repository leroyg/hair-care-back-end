exports.up = function(knex, Promise){
	return knex.schema.createTable('stylists', table => {
		table.increments()

		table.string('first_name', 128).notNullable()
		table.string('last_name', 128).notNullable()
		table.string('phone_number', 10).unique()
		table.string('address')
		table.string('city').notNullable()
		table.string('state').unique().notNullable()
		table.integer('zip', 5).unsigned().unique().notNullable()
		table.integer('rating').unsigned()
		table.string('services')
		table.string('specialty', 128)
		table.integer('average_cost').unsigned()
		table.string('social_network_link', 128)
		table.string('social_network_site', 128)
		table.binary('profile_picture')
		table.binary('portfolio_picture')
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTableIfExists('stylists')
}
