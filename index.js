const express = require("express");
const routes = require("./routes");

const app = express();

const RATES_API_URL = "https://api.ratesapi.io/api/latest";
const PORT = 3030;

/**
 * Add the api url into the req object. In this way the
 * URL is available to all functions
 *
 * @param {Request<ParamsDictionary, any, any, qs.ParsedQs>} req
 * @param {*} res
 * @param {*} next
 */
const addApiUrl = (req, res, next) => {
  req.apiURL = RATES_API_URL;

  next();
};

app.use("/api", addApiUrl, routes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
