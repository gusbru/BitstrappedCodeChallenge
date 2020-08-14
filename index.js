import express from "express";
import Requests from "./API/Requests.js";

const app = express();

const RATES_API_URL = "https://api.ratesapi.io/api/latest";

app.get("/", async (req, res) => {
  try {
    const ratesObj = await Requests.get(RATES_API_URL);
    res.send(ratesObj.rates);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
});

app.get("/:country", async (req, res) => {
  try {
    const { country } = req.params;
    const { base } = req.query;

    let url = RATES_API_URL;
    if (base) {
      url += `?base=${base}`;
    }

    const ratesObj = await Requests.get(url);
    console.log(country);
    console.log(Object.keys(ratesObj.rates));
    const countyKey = Object.keys(ratesObj.rates).find(
      (item) => item.toLowerCase() === country.trim().toLowerCase()
    );
    console.log(countyKey);
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
});

app.listen(3030, () => {
  console.log("server is running");
});
