const request = require('supertest');
const expect = require('expect')

const app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toMatchObject({
        error: 'Page not found.'
      });
    })
    .end(done)
});

it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toContainEqual({
        name: 'Mark',
        age: 29,
      });
    })
    .end(done)
});
