const request = require("supertest");

const app = require("../app");
let ITEMS = require("../fakeDb");

let testItem = {name: "chocolate", price: 2.10}

beforeAll(function () {
    ITEMS.length = 0
})

beforeEach(function () {
    ITEMS.push(testItem)
})
 
afterEach(function () {
    ITEMS.length = 0
}) 

describe('GET, /items' = () => {
    testItem('get all items', asunc () => {
        const res = await request(app).get("/items");
        // expect(res.statusCode).toBe(200)
        console.log(res)
    })
})

