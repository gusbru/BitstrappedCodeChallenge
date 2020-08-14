const https = require("https");

/**
 * Get data from another API using the https get method.
 *
 * @param {string} url
 */
const get = (url) =>
  new Promise((resolve, reject) => {
    if (!url) reject("Invalid URL");

    const request = https.get(url, (res) => {
      let payload = "";

      res.on("data", (data) => {
        payload += data;
      });

      res.on("end", () => {
        resolve(JSON.parse(payload));
      });
    });

    request.on("error", (error) => {
      reject(error.message);
    });
  });

const Requests = {
  get,
};

module.exports = Requests;
