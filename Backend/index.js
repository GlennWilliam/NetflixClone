const express = require("express");
const app = express();
const { OK, ERR } = require("./utils/response.js");
const cors = require("cors");

const PORT = 3002;

app.get("/", (req, res) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.0"
  }
  OK(res, 200, data, "Success getting root endpoint");
});

app.use(express.json());
app.use(cors());

app.get("/my-movies", (req, res) => {
  const data = {
    id: 1,
    title: "The Shawshank Redemption",
    year: "1994"
  }
  OK(res, 200, data, "Success getting my-movies endpoint");
});

// Add favorite movie
app.post("/my-movies", (req, res) => {
  console.log("Insert new movie");
  const data = req.body;
  console.log({ data });
  res.status(200).json({ message: "Movie added" });
});

// Delete favorite movie
app.delete("/my-movies/:id/:token", (req, res) => {
  console.log("Delete movie")
  response.json({ message: "Movie deleted" });
  const { id, token} = request.params;
  console.log({id, token});
  respponse.status(204).json({message: "Movie deleted"});
});

// Add user data for verification
app.post("/token", (req, res) => {
  console.log("Insert new user")
  const data = request.body;
  console.log({data});
  response.json({ message: "Token created" });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
