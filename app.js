const express = require("express");
const morgan = require("morgan");
const ExpressError = require("./expressError");
const itemsRoutes = require("./routes/items");

const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use("/items", itemsRoutes);

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

// ** 404 handler */
app.use(function (req, res) {
  return new ExpressError("Not Found", 404);
});

/** general error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;