const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");

// const Item = require('../item')

const ITEMS = require("../fakeDb");

// const ITEMS = [{name: "popsicle", price: 1.45}]

router.get('/', (req, res, next) => {
  // question 1 - get request object - request.headers
  // console.log(request.headers);
  debugger
  return res.json({ items: ITEMS });
})

router.post("/", (req, res, next) => {
  // question 2 - test route using req.body
  items.push(req.body.name);
});

router.get("/:name", (req, res, next) => {
  // question 3 - how to access req.body
  reqItem = req.params.name;
  res.json({ items: reqItem });
});

router.patch("/:name", (res, req, next) => {
  // how to access req.body
  updateItem = req.params.name;
});

router.delete("/:delte", (res, req, next) => {
  // how to access req.body
  deleteItem = req.params.name;
  items.splice(deleteItem);
});


module.exports = router;