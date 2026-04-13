const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  it('GET / should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World');
  });

  it('GET /sum should return correct sum', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.body.result).toBe(5);
  });
});