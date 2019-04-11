const request = require('supertest');

const server = require('./server.js');

// testing endpoints
// returns correct http status code
describe('server.js', () => {
	describe('GET /', () => {
		it('should respond with 200 OK', async () => {
			const res = await request(server).get('/');
			expect(res.status);
		});

		it('should respond with 200 OK', async () => {
			await request(server)
				.get('/')
				.expect(200);
		});

		it('should return JSON', async () => {
			const res = await request(server).get('/');
			expect(res.type).toBe('application/json');
		});
	});

	it('should return { api: "up" }', async () => {
		const res = await request(server).get('/');
		expect(res.body.api).toBe('up');
	});
});
