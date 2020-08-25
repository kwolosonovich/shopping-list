const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");

const ITEMS = require("../fakeDb");

router.get('/', (req, res, next) => {
  return res.json({ items: ITEMS });
})

router.post("/", (req, res, next) => {
  newItem = req.body
  if (newItem.name === undefined || newItem.price === undefined) {
    throw new ExpressError('Name and price required', 400)
  }
  ITEMS.push(newItem)
  res.json({ added: newItem})
});

router.get("/:name", (req, res, next) => {
  let reqItem = req.params.name;
  if (reqItem === undefined) {
    throw new ExpressError('Item not found', 404)
  }
  reqItem = ITEMS.find( item => item.name === reqItem)
  res.json({ items: reqItem });
});

router.patch("/:name", (req,res, next) => {
  let reqItem = req.req.params.name;
  if (reqItem === undefined) {
    throw new ExpressError("Item not found", 404);
  }
  reqItem = ITEMS.find((item) => item.name === reqItem);
  reqItem.name = req.req.body.name;
  reqItem.price = req.req.body.price;
  res.json({ updated: reqItem });
});

router.delete("/:name", (req, res, next) => {
  debugger
  deleteItem = req.req.params.name;
  if (deleteItem === undefined) {
    throw new ExpressError("Item not found", 404);
  }
  ITEMS.splice(deleteItem, 1);
  msg = "deleted"
  res.json({ message: msg })
});


module.exports = router;