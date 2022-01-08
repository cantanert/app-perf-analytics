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

    it('should return an exception with "message" to a request with empty body', async () => {
      await request(App).post(capabilityServiceRelativePath).send().then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return 400 HTTP status code to a request with nullish "TTFB" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        TTFB: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" to a request with nullish "TTFB" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        TTFB: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-number "TTFB" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        TTFB: '1'
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });


    it('should return 400 HTTP status code to a request with nullish "FCP" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        FCP: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });


    it('should return an exception with "message" to a request with nullish "FCP" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        FCP: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-number "FCP" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        FCP: "1"
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return 400 HTTP status code to a request with nullish "DOM_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        DOM_LOAD: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" to a request with nullish "DOM_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        DOM_LOAD: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-number "DOM_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        DOM_LOAD: "1"
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return 400 HTTP status code to a request with nullish "WINDOW_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        WINDOW_LOAD: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" to a request with nullish "WINDOW_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        WINDOW_LOAD: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-number "WINDOW_LOAD" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        WINDOW_LOAD: "1"
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return 400 HTTP status code to a request with nullish "RESOURCES" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        RESOURCES: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" to a request with nullish "RESOURCES" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        RESOURCES: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-array "RESOURCES" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        RESOURCES: {}
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return 400 HTTP status code to a request with nullish "dateInfo" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        dateInfo: null
      }).then((res) => {
        expect(res.statusCode).toBe(400);
      });
    });

    it('should return an exception with "message" to a request with nullish "dateInfo" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        dateInfo: null
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return an exception with "message" to a request with non-string "dateInfo" param', async () => {
      await request(App).post(capabilityServiceRelativePath).send({
        ...payload,
        dateInfo: 1996
      }).then((res) => {
        expect(res.body.message).toBeDefined();
      });
    });

    it('should return a response with 201 HTTP status code', async () => {
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

  })
})