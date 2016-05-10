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

      $set: {quality: "good" }

    });

    console.log("voted positive");

    $('#topic').val("");
    Router.go('tweets', {_id: this.index + 1});

  },


  "click .negative": function () {

    Tweets.update(this._id, {

      $set: {quality: "bad" }

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
