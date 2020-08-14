const Requests = require("../API/Requests.js");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCurrencies = async (req, res) => {
  try {
    const RATES_API_URL = req.apiURL;
    const ratesObj = await Requests.get(RATES_API_URL);
    res.send(ratesObj.rates);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllCurrencies;
