const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Welcome to DevOps Pipeline');
  });
});
