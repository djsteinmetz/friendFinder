const express = require('express')
const path = require("path");
const app = express()
// Routes
// =============================================================
module.exports = function(app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};