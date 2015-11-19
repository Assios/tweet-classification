Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.route('/tweets/:_id', {
	name: 'tweets',
    data: function() {
        return Tweets.findOne({
            "index": parseInt(this.params._id)
        });
    },
    waitOn: function() {
        return [
            Meteor.subscribe('tweet', this.params._id)
        ]
    }
});

Router.route('/', {
    name: 'stats'
});

var requireLogin = function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction(requireLogin, {only: 'tweets'});
