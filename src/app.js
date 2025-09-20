const express =  require("express");
const morgan = require("morgan");
require("dotenv").config()
const RouterDrivers = require("./routes/drivers.routes.js")
 
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(RouterDrivers);

module.exports = app;
