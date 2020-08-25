const express = require("express");
const ExpressError = require("./expressError");

const app = express();

app.use(express.json());



module.exports = app;