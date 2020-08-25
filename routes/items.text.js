const request = require("supertest");

const app = require("../app");
let ITEMS = require("../fakeDb");

let testItem = {name: "chocolate", price: 2.10}

beforeEach(function () {
    ITEMS.push(testItem)
})
 
afterEach(function () {
    ITEMS.length = 0
}) 

