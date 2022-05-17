const express = require("express");
const cities = require("./cities-controller");
const timezones = require("./timezones-controller");
const v1 = express.Router();

v1.use('/timezones',timezones);
v1.use('/cities',cities);
module.exports = v1;