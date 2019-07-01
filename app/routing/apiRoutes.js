const friendData = require("../data/friends");

module.exports = (app) => {
    // API GET Requests

    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        // After user fills out the survey form, the server will route to this post event.
        var newMember = req.body;

        var bestMatchId = -1;
        var bestMatchValue;
        for (var i = 0; i < friendData.length; i++) {
            var diff = 0;
            for (var j = 0; j < newMember.scores.length; j++) {
                diff += Math.abs(newMember.scores[j] - friendData[i].scores[j]);
            }
            if ((bestMatchId < 0) || (bestMatchValue > diff)) {
                bestMatchId = i;
                bestMatchValue = diff;
            }
        }

        friendData.push(newMember);
        if (bestMatchId < 0)
            res.json({ "name": "No match found!", "photo": "" });
        else
            // return best match
            res.json(friendData[bestMatchId]);
    });
}