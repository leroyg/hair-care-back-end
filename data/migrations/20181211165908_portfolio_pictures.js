exports.up = function(knex, Promise){
	return knex.schema.createTable('pictures', table => {
		table.increments()
			.primary()

		table.binary('picture')
		table.integer('stylist_id').notNullable().references('id').inTable('stylists').onDelete('CASCADE').index()
		table.timestamps(true,false)
	})
}

exports.down = function(knex, Promise){
	return knex.schema.dropTable('pictures')
}
