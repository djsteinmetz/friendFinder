const express = require('express')
const path = require("path");
const app = express()

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
module.exports = function(app) {
    app.get("/survey", function (req, res) {
        // res.send("Welcome to the Star Wars Page!")
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function (req, res) {
        // res.send("Welcome HOME!")
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};