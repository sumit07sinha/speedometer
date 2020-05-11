const bodyParser = require("body-parser");

// Express to run server and routes
const express = require("express");
const app = express();
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Create JS object
let speedData;
// Respond with JS object when a GET request is made to the homepage
app.get("/getSpeed", function (req, res) {
  console.log(req.query.speed);
  speedData = req.query.speed;
  res.status(200);
});
app.get("/fetchSpeedData", function (req, res) {
  res.send(speedData);
});
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 5000;
const server = app.listen(port, listening);
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
