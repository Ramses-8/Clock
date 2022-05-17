const CitiesEntity = require("./cities-entity");
const TimezonesEntity = require("./timezones-entity");

const cities = new CitiesEntity();
const timezones = new TimezonesEntity();

module.exports = { cities, timezones };