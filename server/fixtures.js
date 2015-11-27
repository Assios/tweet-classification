function getAllTweets() {
    var url = "http://assios.no:8888"

    var result = Meteor.http.get(url, {
        timeout: 15000
    });
    if (result.statusCode == 200) {
        var response = JSON.parse(result.content);
        console.log("Got all tweets");
        return response;
    } else {
        console.log("Response issue: ", result.statusCode);
        var errorJson = JSON.parse(result.content);
        throw new Meteor.Error(result.statusCode, errorJson.error);
    }
}

if (Tweets.find().count() === 0) {
  tweets = _.values(getAllTweets())[0];

  for (i = 0; i < tweets.length; i++) {
  	Tweets.insert(tweets[i]);
  }
}
