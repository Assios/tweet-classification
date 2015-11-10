Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/tweets/:_id', {
	name: 'tweet',
    data: function() {
        return Tweets.findOne({
            "index": parseInt(this.params._id)
        });
    }
});
