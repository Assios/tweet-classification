Tweets = new Mongo.Collection("tweets");

Tweets.allow({
    update: function(userId, doc) {
    	return !! userId;
    }
});
