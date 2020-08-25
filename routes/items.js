const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");

const ITEMS = require("../fakeDb");

router.get('/', (req, res, next) => {
  return res.json({ items: ITEMS });
})

router.post("/", (req, res, next) => {
  // ITEMS.push(req.body.name);
  newItem = req.body
  ITEMS.push(newItem)
  res.json({ added: newItem})
});

router.get("/:name", (req, res, next) => {
  let reqItem = req.params.name;
  reqItem = ITEMS.find( matchItem => matchName.name === reqItem)
  res.json({ items: reqItem });
});

router.patch("/:name", (res, req, next) => {
  let updateItem = req.params.name;
  reqItem = ITEMS.find( matchItem => matchName.name === reqItem) 
});

router.delete("/:delte", (res, req, next) => {
  // how to access req.body
  deleteItem = req.params.name;
  items.splice(deleteItem);
});


module.exports = router;