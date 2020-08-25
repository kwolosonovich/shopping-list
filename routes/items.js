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
  reqItem = ITEMS.find( item => item.name === reqItem)
  res.json({ items: reqItem });
});

router.patch("/:name", (res, req, next) => {
  let updateItem = req.params.name;
  reqItem = ITEMS.find( item => item.name === reqItem) 
  reqItem.name = req.body.name
  reqItem.price = req.body.price
  res.json('patch route')
});

router.delete("/:delte", (res, req, next) => {
  deleteItem = req.params.name;
  items.splice(deleteItem);
});


module.exports = router;