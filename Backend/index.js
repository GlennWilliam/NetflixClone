require("dotenv").config();
const express = require("express");
const app = express();
const { OK, ERR } = require("./utils/response.js");
const cors = require("cors");
const routes = require("./routes/index.routes");
const { API_PORT, MONGO_URL } = process.env;
const mongoose = require("mongoose");

const PORT = API_PORT;

app.get("/", (req, res) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.0"
  };
  OK(res, 200, data, "Success getting root endpoint");
});

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL).catch(err => {
  if(err) {
    console.log(err);
    throw err
  }
  console.log("Connected to MongoDB");
});

// Mount routes here
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
