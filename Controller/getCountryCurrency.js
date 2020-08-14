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
const getCountryCurrency = async (req, res) => {
  try {
    const { country } = req.params;
    const { base } = req.query;
    const RATES_API_URL = req.apiURL;

    let url = RATES_API_URL;

    // check if a base was given
    if (base) url += `?base=${base}`;

    const ratesObj = await Requests.get(url);

    const countyKey = Object.keys(ratesObj.rates).find(
      (item) => item.toLowerCase() === country.trim().toLowerCase()
    );

    const rate = ratesObj.rates[countyKey];
    const ansObj = {
      country: countyKey,
      rate,
    };

    res.json(ansObj);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

module.exports = getCountryCurrency;
