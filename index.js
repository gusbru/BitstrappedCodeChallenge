const express = require("express");
const routes = require("./routes");
raconst addApiUrl = require("./Utils/addURL");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT;

// routes
app.use("/api", addApiUrl, routes);

// custom error handler
app.use((err, req, res, next) => {
  res.status(err.code).send({
    code: err.code,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
