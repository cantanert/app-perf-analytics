const request = require('supertest');
const App = require('../../app');


describe("not-found-exception-service",() => {
  describe("/GET <AN_UNDEFINED_PATH>", () => {

    it('should return a response with 404 HTTP status code ', async () => {
      const response = await request(App).get('/dgadshshds').send();
      expect(response.statusCode).toBe(404);
    });

    it('should return a response with "message" property ', async () => {
      const response = await request(App).get('/dgadshshds').send();
      expect(response.error.message).toBeDefined();
    });

  })
})