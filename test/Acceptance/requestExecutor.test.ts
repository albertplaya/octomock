import { app } from "../../src/app";
import request from "supertest";
import { getOkRequestFixtures, postOkRequestFixtures } from "../Mock/requestFixtures";

describe("Execute request suit", () => {
  it("Execute get request with 200 response", async (done) => {
    const req = getOkRequestFixtures();
    const response = await request(app).get(req.path);

    expect(response.status).toBe(req.response);
    expect(response.text).toBe(req.message);
    done();
  });

  it("Execute post request with 200 response", async (done) => {
    const req = postOkRequestFixtures();
    const response = await request(app).post(req.path);

    expect(response.status).toBe(req.response);
    expect(response.text).toBe(req.message);
    done();
  });
});
