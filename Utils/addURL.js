const dotenv = require("dotenv");
dotenv.config();

/**
 * Add the api url into the req object. In this way the
 * URL is available to all functions
 *
 * @param {Request<ParamsDictionary, any, any, qs.ParsedQs>} req
 * @param {*} res
 * @param {*} next
 */
const addApiUrl = (req, res, next) => {
  const RATES_API_URL = process.env.RATES_API_URL;

  req.apiURL = RATES_API_URL;

  next();
};

module.exports = addApiUrl;
