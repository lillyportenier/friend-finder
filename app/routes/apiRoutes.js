var userData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });
    // app.get("/survey", function(req, res){
    //     res.json(newUser);
    // })

    app.post("/api/friends", function (req, res) {
        var newUserScores = req.body.scores
        var newUser = req.body;
        var friendDiffArray = [];
        var max = Infinity;
        var bestfriendNumber;
        // console.log(newUser);

        // console.log(userData);
        for (i = 0; i < userData.length; i++) {
            // console.log(newUser[i], "NU");

            // console.log(newUserScores[i]);
            var diff = 0;

            for (k = 0; k < newUserScores.length; k++) {
                diff += (Math.abs(parseInt(userData[i].scores[k]) - parseInt(newUserScores[k])));
            }
            friendDiffArray.push(diff);
        }
        console.log(friendDiffArray, "dif afay");
       
        // for (i = 0; friendDiffArray.length > i; i++) {

            var bestFriend = Math.min(friendDiffArray)
            // if (friendDiffArray[i] < max) {
            //     // max = friendDiffArray[i];
            //     bestfriendNumber = [i]
            //     console.log(bestfriendNumber , "BFF NUMBER")
            // }
        // }
        console.log(bestFriend, "BFF")
        // var bestfriendName = userData[bestfriendNumber];
        
        // res.json(bestfriendName);

        // still need to get the best freiend function to only take the data with the lowest diffrence, then send this to the the survey.html page
    })
}