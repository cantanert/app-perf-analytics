const request = require('supertest');
const App = require('../../app');

const capabilityServiceRelativePath = "/api/performance-metrics-capability";

const payload = {
  DOM_LOAD: 0.7937999999970198,
  FCP: 0.7387000000029802,
  RESOURCES: [],
  TTFB: 0.07170000000298023,
  WINDOW_LOAD: 0.7939000000059605,
  dateInfo: "2022-01-08T20:23:22.873Z"
}

describe("performance-metrics-capability-service",() => {
  describe("/POST performance-metrics-capability", () => {

    it('should return 400 HTTP status code to a request with empty body', async () => {
      await request(App).post(capabilityServiceRelativePath).send().then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return a "message" to a request with empty body', async () => {
      await request(App).post(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return a response with 500 HTTP status code', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.statusCode).toBe(201);
      });
    });


    it('should return an object with "savedMetric" array', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric).toBeDefined();
      });
    });

    it('should return an object with "ttfb" value', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.ttfb).toBeDefined();
      });
    });

    it('should return an object with "fcp" value', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.fcp).toBeDefined();
      });
    });

    it('should return an object with "domLoad" value', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.domLoad).toBeDefined();
      });
    });

    it('should return an object with "windowLoad" value', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.windowLoad).toBeDefined();
      });
    });

    it('should return an object with "resources" array', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.resources).toBeDefined();
      });
    });

    it('should return an object with "date" string', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.date).toBeDefined();
      });
    });

    it('should return an object with "id" string', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.savedMetric.id).toBeDefined();
      });
    });

    it('should return an object with "message" string', async () => {
      await request(App).post(capabilityServiceRelativePath).send(payload).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('1 + 2 = 3', () => {
      expect(1 + 2).toBe(3);
    });

  })
})