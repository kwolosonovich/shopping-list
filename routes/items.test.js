// create new test env variable
process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
let ITEMS = require("../fakeDb");

let testItem = { name: "chocolate", price: 2.1 };

beforeAll(function () {
  ITEMS.length = 0;
});

// test set up - add test case
beforeEach(function () {
  ITEMS.push(testItem);
});

// reset to empty array
afterEach(function () {
  ITEMS.length = 0;
});

describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get("/items");
    expect(res.statusCode).toBe(200);
    expect(res.body.items.length).toEqual(1);
    expect(res.body.items[0].name).toContain("chocolate");
  });
});

describe("POST /items", () => {
  test("Add an item", async () => {
    const res = await request(app)
      .post("/items")
      .send({ name: "gum", price: 0.5 });
    expect(res.statusCode).toBe(200);
    expect(res.body.added).toEqual({ name: "gum", price: 0.5 });
  });
});

describe("GET /items/name", () => {
  test("Get item by name", async () => {
    const res = await request(app).get("/items/chocolate");
    expect(res.statusCode).toBe(200);
    expect(res.body.items).toEqual({ name: "chocolate", price: 2.1 });
  });
});

describe('PATCH /items/name', () => {
    test("Update an item", async () => {
        const res = await request(app)
          .patch(`/items/${testItem.name}`)
          .send({ name: "chocolates", price: 2.99 });
        expect(res.statusCode).toBe(200)
        expect(res.body.updated).toEqual({ name: "chocolates", price: 2.99 });
    })
});

describe('DELETE /items/name', () => {
    test("Delete an item", async () => {
        const res = await request(app).delete(`/items/${testItem.name}`)
        debugger;
        expect(res.body.message).toMatch("deleted")
    })
})