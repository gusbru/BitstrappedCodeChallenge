const Requests = require("../API/Requests.js");

/**
 * Get all the currencies and return them
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCurrencies = async (req, res, next) => {
  try {
    const RATES_API_URL = req.apiURL;
    const ratesObj = await Requests.get(RATES_API_URL);
    res.send(ratesObj.rates);
  } catch (error) {
    const customError = new Error(error.message);
    customError.code = 500;
    next(customError);
  }
};

module.exports = getAllCurrencies;
