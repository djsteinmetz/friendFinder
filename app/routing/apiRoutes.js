const express = require('express')
const app = express()
var friends = require("../data/friends");
// Routes
// =============================================================
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        var newFriendScores = req.body.scores;
        for(var i=0; i<newFriendScores.length; i++) {
            newFriendScores[i] = parseInt(newFriendScores[i]);
        };
        var scoresMatched = [];
        closestMatch = 0;
        //Compare the two friends scores (arrays)
        for (let i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
            for (let x = 0; x < newFriendScores.length; x++) {
                scoreDifference += (Math.abs(friends[i].scores[x]) - (newFriendScores[x]));
            }
            scoresMatched.push(Math.abs(scoreDifference));
        }
        //find the two closest match
        for (let i = 0; i < scoresMatched.length; i++) {
            if (scoresMatched[i] <= scoresMatched[closestMatch]) {
                closestMatch = i;
            }
        }
        var bestFriend = friends[closestMatch];
        friends.push(req.body);
        res.json(bestFriend);
    });
};