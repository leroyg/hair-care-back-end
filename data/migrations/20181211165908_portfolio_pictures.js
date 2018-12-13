exports.up = function(knex, Promise){
	return knex.schema.createTable('pictures', table => {
		table.increments()
			.primary()

		table.binary('picture')
		table.integer('stylist_id').notNullable().references('id').inTable('stylists').onDelete('CASCADE').index()
		table.timestamps(true,true)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('portfolio_pictures')
}
