const Requests = require("../API/Requests.js");

/**
 * Get the currency from one specific Country.
 *
 * If query parameter base is specified, then change
 * the base on which the currency is calculated.
 *
 * @param {*} req
 * @param {*} res
 */
const getCountryCurrency = async (req, res, next) => {
  try {
    const { country } = req.params;
    const { base } = req.query;
    const RATES_API_URL = req.apiURL;

    let url = RATES_API_URL;

    // check if a base was given
    if (base) url += `?base=${base}`;

    const ratesObj = await Requests.get(url);

    const countryKey = Object.keys(ratesObj.rates).find(
      (item) => item.toLowerCase() === country.trim().toLowerCase()
    );

    if (!countryKey) {
      throw new Error("invalid country");
    }

    const rate = ratesObj.rates[countryKey];
    const ansObj = {
      country: countryKey,
      rate,
    };

    res.json(ansObj);
  } catch (error) {
    console.log(error);
    const customError = new Error(error.message);
    customError.code = 404;
    next(customError);
  }
};

module.exports = getCountryCurrency;
