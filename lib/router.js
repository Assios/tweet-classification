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
