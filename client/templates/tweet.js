Template.tweets.helpers({

  voted: function() {
    if (this.sentiment == 0) {
      return false;
    }

    else {
      return true;
    }
  },

  user_already_voted: function() {
    if (this.voted_by.indexOf(Meteor.user().username) != -1) {
      return true;
    }
    return false;
  }
});

Template.tweets.events({

  "click .positive": function (e) {

    Tweets.update(this._id, {

      $set: {positive: this.positive + 1, topic: $('#topic').val(), voted_by: this.voted_by.concat([Meteor.user().username]) }

    });

    console.log("voted positive");

    $('#topic').val("");
    Router.go('tweets', {_id: this.index + 1});

  },

  "click .neutral": function (e) {

    var topic = $(e.target).find('[name=topic]').val();

    Tweets.update(this._id, {

      $set: {neutral: this.neutral + 1, topic: $('#topic').val(), voted_by: this.voted_by.concat([Meteor.user().username]) }

    });

    console.log("voted neutral");

    $('#topic').val("");
    Router.go('tweets', {_id: this.index + 1});

  },

  "click .negative": function () {

    Tweets.update(this._id, {

      $set: {negative: this.negative + 1, topic: $('#topic').val(), voted_by: this.voted_by.concat([Meteor.user().username]) }

    });

    console.log("voted negative");

    $('#topic').val("");
    Router.go('tweets', {_id: this.index + 1});

  },

  "click .previous-tweet": function (e) {

    Router.go('tweets', {_id: this.index - 1});

  },

  "click .next-tweet": function (e) {

    Router.go('tweets', {_id: this.index + 1});

  },

  "click .update-topic": function () {

    Tweets.update(this._id, {

      $set: {topic: $('#topic').val()}

    });

    console.log("updated topic");

    $('#topic').val("");
  },  
});
