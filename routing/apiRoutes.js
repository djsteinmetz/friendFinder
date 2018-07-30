const express = require('express')
const app = express()


var friends = [
    {
        name: "DJ Steinmetz",
        outdoors: 5,
        dogs: 3,
        cats: 4,
        reading: 4
    },
    {
        name: "Karen Beltran-Lopez",
        outdoors: 3,
        dogs: 1,
        cats: 2,
        reading: 5
    },
    {
        name: "Tashi Wangmo",
        outdoors: 5,
        dogs: 5,
        cats: 5,
        reading: 5
    },
];

// Routes
// =============================================================

app.get("/api/friends", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
        if (chosen === friends[i].routeName) {
            return res.json(friends[i]);
        }
    }

    return res.json(false);
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