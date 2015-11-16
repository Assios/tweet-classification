Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('tweets'); }
});

Router.route('/tweets/:_id', {
	name: 'tweets',
    data: function() {
        return Tweets.findOne({
            "index": parseInt(this.params._id)
        });
    }
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
