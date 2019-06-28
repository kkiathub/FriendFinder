const friendData = require("../data/friends");

module.exports = (app) => {
    // API GET Requests

    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
    // After user fills out the survey form, the server will route to this post event.
    });
}