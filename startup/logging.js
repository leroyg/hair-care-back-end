const winston = require('winston')

module.exports = () => {
	winston.createLogger({
		transports : [
			new winston.transports.Console({ colorize: true, prettyPrint: true }),
			new winston.transports.File({ filename: 'combined.log', level: 'info' }),
			new winston.transports.File({ filename: 'errors.log', level: 'error' }),
		],
	})
}
