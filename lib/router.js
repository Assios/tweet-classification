Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'tweet',
    data: function() {
    	random = Math.floor(Math.random() * 3);

        return Tweets.findOne({
            "index": random
        });
    }
});

Router.route('/tweets/:_id', {
	name: 'tweetNumber',
    data: function() {
        return Tweets.findOne({
            "index": parseInt(this.params._id)
        });
    }
});
