const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allows requests from different ports/locations
app.use(express.json());

app.get("/", (req, res) => {
  req.body;
  res.send({ msg: "This is the express server" });
});

app.listen(5001);
