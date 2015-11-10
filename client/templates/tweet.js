Template.tweet.helpers({
    getRandomTweet: function() {
        random = Math.floor(Math.random() * 2) + 1;

        return Tweets.find({"index": random});
    }
});
