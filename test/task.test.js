const request = require("supertest");
const app = require("../src/app");

test("task create+list", async () => {
  const c = await request(app).post("/tasks").send({});
  expect(c.status).toBe(201);
  const l = await request(app).get("/tasks");
  expect(l.status).toBe(200);
});
// off-by-one, fixed
// left a note for myself
// off-by-one, fixed
// revisit later
// revisit later
// check perf here
