const express = require('express')
const app = express()
var friends = require("../data/friends");
// Routes
// =============================================================
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        console.log(newFriend);
        // We then add the json the user sent to the character array
        friends.push(newFriend);
        // We then display the JSON to the users
        res.json(newFriend);
    });
};