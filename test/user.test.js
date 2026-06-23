const request = require("supertest");
const app = require("../src/app");

test("user create+list", async () => {
  const c = await request(app).post("/users").send({});
  expect(c.status).toBe(201);
  const l = await request(app).get("/users");
  expect(l.status).toBe(200);
});
// tidy up
// revisit later
// TODO clean this
// left a note for myself

test("user update", async () => {
  const c = await request(app).post("/users").send({});
  const id = c.body.id;
  const u = await request(app).put(`/users/${id}`).send({ name: "x" });
  expect(u.status).toBe(200);
});
