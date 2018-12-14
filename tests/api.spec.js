const request = require('supertest')
const server = require('../routes/stylists.js')

describe('sanity test', () => {
	it('should respond with a status code of 200', async () => {
		const response = await request(server).get('/api/stylists')
		expect(response.status).toBe(200)
	})
})
