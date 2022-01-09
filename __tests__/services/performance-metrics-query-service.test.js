const request = require('supertest');
const App = require('../../app');

const capabilityServiceRelativePath = "/api/performance-metrics-query";

describe('performance-metrics-query-service', () => {
  describe("/GET performance-metrics-query", () => {
    it('should return a response with 200 HTTP status code', async () => {
      await request(App).get(capabilityServiceRelativePath).send().then((res) => {
        expect(res.statusCode).toBe(200);
      });
    });

    it('should return an object with "statistics" array', async () => {
      await request(App).get(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.statistics).toBeDefined();
      });
    });

    it('should return an object with "utcFromDate" string', async () => {
      await request(App).get(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.utcFromDate).toBeDefined();
      });
    });

    it('should return an object with "utcToDate" string', async () => {
      await request(App).get(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.utcToDate).toBeDefined();
      });
    });

  })

  describe("/POST performance-metrics-query", () => {

    const currentDate = new Date();
    const oneMinuteBeforeCurrent = new Date(currentDate.getTime() - 60000);
    const oneMinuteAfterCurrent = new Date(currentDate.getTime() + 60000);

    it('should return an exception with 400 HTTP status code to a request with empty body', async () => {
      await request(App).post(capabilityServiceRelativePath).send().then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" prop to a request with empty body', async () => {
      await request(App).post(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with 400 HTTP status when the start date is after the end date', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteAfterCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with 400 HTTP status when a nullish start date param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: null,
        endDate: currentDate
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" property when a nullish start date param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: null,
        endDate: currentDate
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with 400 HTTP status when a nullish end date param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteAfterCurrent,
        endDate: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" property when a nullish end date param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteAfterCurrent,
        endDate: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with 400 HTTP status when the start date is after the end date', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteAfterCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with 400 HTTP status when the end date is after current date', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: currentDate,
        endDate: oneMinuteBeforeCurrent
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return a response with 200 HTTP status code', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.statusCode).toBe(200);
      })
    });

    it('should return an object with "statistics" array', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.body.statistics).toBeDefined();
      });
    });

    it('should return an object with "utcFromDate" string', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.body.utcFromDate).toBeDefined();
      });
    });

    it('should return an object with "utcToDate" string', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        startDate: oneMinuteBeforeCurrent,
        endDate: currentDate
      }).then((res) => {
        expect(res.body.utcToDate).toBeDefined();
      });
    });

  })
})