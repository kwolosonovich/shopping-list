const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const items = require("../fakeDb");


app.get("/items", (req, res, next) => {
  // question 1 - test route using request.headers
  console.log(request.headers);
  debugger;
  return res.json({ items });
});

app.post("/items", (req, res, next) => {
  // question 2 - test route using req.body
  items.push(req.body.name);
});

app.get("/items/:name", (req, res, next) => {
  // question 3 - how to access req.body
  reqItem = req.params.name;
  res.json({ items: reqItem });
});

app.patch("/items/:name", (res, req, next) => {
  // question 3 - how to access req.body
  updateItem = req.params.name;
});

app.delete("/items/:delte", (res, req, next) => {
  deleteItem = req.params.name;
  items.splice(deleteItem);
});


module.exports = router;