const express = require("express");
const getAllCurrencies = require("../Controller/getAllCurrencies");
const getCountryCurrency = require("../Controller/getCountryCurrency");

const routes = express.Router();

routes.get("/", getAllCurrencies);
routes.get("/:country", getCountryCurrency);

module.exports = routes;
