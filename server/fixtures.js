tweets = []

if (Tweets.find().count() === 0) {
  for (var i = 0; i < tweets.length; i++) {
  	Tweets.insert(tweets[i]);
  }

}
