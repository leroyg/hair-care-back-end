// Update with your config settings.
require('dotenv').config();

const dbConnection = process.env.DATABASE_URL;

const dbSettings = {
	client: 'pg',
	connection: dbConnection,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		directory: './data/migrations',
		tableName: 'dbmigrations',
	},
	seeds: {
		directory: './data/seeds',
	},
};

module.exports = {
	development : {
		client           : 'sqlite3',
		connection       : {
			filename : './data/database.sqlite3',
		},
		useNullAsDefault : true,
		migrations       : {
			directory : './data/migrations/',
		},
		seeds            : {
			directory : './data/seeds',
		},
	},
	production: dbSettings,
};
