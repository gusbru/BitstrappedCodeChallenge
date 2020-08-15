const Requests = require("../API/Requests.js");

/**
 * Get the currency from one specific Country.
 *
 * If query parameter base is specified, then change
 * the base on which the currency is calculated.
 *
 * @param {*} req request object
 * @param {*} res response object
 */
const getCountryCurrency = async (req, res, next) => {
  try {
    const { country } = req.params;
    const { base } = req.query;
    const RATES_API_URL = req.apiURL;

    let url = RATES_API_URL;

    // check if a base was given
    if (base) url += `?base=${base}`;

    // requenst from external API
    const ratesObj = await Requests.get(url);

    // search for country
    const countryKey = Object.keys(ratesObj.rates).find(
      (item) => item.toLowerCase() === country.trim().toLowerCase()
    );

    // country not found
    if (!countryKey) {
      const customError = new Error("Country not found");
      customError.code = 200;
      throw customError;
    }

    // build the response object
    const rate = ratesObj.rates[countryKey];
    const ansObj = {
      country: countryKey,
      rate,
    };

    res.json(ansObj);
  } catch (error) {
    const customError = new Error(error.message);
    customError.code = error.code ? error.code : 500;
    next(customError);
  }
};

module.exports = getCountryCurrency;
