const request = require('supertest');
const App = require('../../app');


describe("not-found-exception-service",() => {
  describe("/GET <AN_UNDEFINED_PATH>", () => {

    it('should return a response with 404 HTTP status code ', async () => {
      await request(App).get('/dgadshshds').send().then((res) => {
        expect(res.statusCode).toBe(404);
      });
    });

    it('should return a response with "message" property ', async () => {
      await request(App).get('/dgadshshds').send().then((res)=>{
        expect(res.error.message).toBeDefined();
      });
    });

  })
})