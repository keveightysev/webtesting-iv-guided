const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert()', () => {
		it('should insert the provided hobbit', async () => {
			await Hobbits.insert({ name: 'gaffer' });

			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(1);
		});

		it('should insert the provided hobbit', async () => {
			let hobbit = await Hobbits.insert({ name: 'frodo' });
			expect(hobbit.name).toBe('frodo');

			hobbit = await Hobbits.insert({ name: 'sam' });
			expect(hobbit.name).toBe('sam');
		});
	});
});
