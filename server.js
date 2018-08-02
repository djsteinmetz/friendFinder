// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require the HTML Routing page
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
require("./app/data/friends");
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });