const request = require('supertest');
const App = require('../../app');

const capabilityServiceRelativePath = "/api/performance-metrics-query";

describe('performance-metrics-query-service', () => {
  describe("/GET performance-metrics-query", () => {
    let response;
    beforeEach(async () => {
      response = await request(App).get(capabilityServiceRelativePath).send();
    })
    it('should return a response with 200 HTTP status code', async () => {
      expect(response.statusCode).toBe(200);
    });

    it('should return an object with "statistics" array', async () => {
      expect(response.body.statistics).toBeDefined();
    });

    it('should return an object with "utcFromDate" string', async () => {
      expect(response.body.utcFromDate).toBeDefined();
    });

    it('should return an object with "utcToDate" string', async () => {
      expect(response.body.utcToDate).toBeDefined();
    });

  })

  describe("/POST performance-metrics-query", () => {

    const currentDate = new Date();
    const oneMinuteBeforeCurrent = new Date(currentDate.getTime() - 60000);
    const oneMinuteAfterCurrent = new Date(currentDate.getTime() + 60000);

    it('should return 400 HTTP status code to a request with empty body', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send();
      expect(response.statusCode).toBe(400);
    });

    it('should return error when the start date is after the end date', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteAfterCurrent,
        endDate: currentDate
      });
      expect(response.statusCode).toBe(400);
    });

    it('should return error when the end date is after current date', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: currentDate,
        endDate: oneMinuteBeforeCurrent
      });
      expect(response.statusCode).toBe(400);
    });

    it('should return a response with 200 HTTP status code', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      });
      expect(response.statusCode).toBe(200);
    });

    it('should return an object with "statistics" array', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      });
      expect(response.body.statistics).toBeDefined();
    });

    it('should return an object with "utcFromDate" string', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      });
      expect(response.body.utcFromDate).toBeDefined();
    });

    it('should return an object with "utcToDate" string', async () => {
      const response = await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      });
      expect(response.body.utcToDate).toBeDefined();
    });

  })
})