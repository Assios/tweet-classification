Meteor.publish('tweets', function() {
  return Tweets.find();
});

Meteor.publish('tweet', function(_id) {
	check(_id, String);
	return Tweets.find({index: parseInt(_id)});
});
