Template.tweets.helpers({

  voted: function() {
    if (this.sentiment == 0) {
      return false;
    }

    else {
      return true;
    }
  }
});

Template.tweets.events({

  "click .positive": function (e) {

    console.log("voted positive");

    Tweets.update(this._id, {

      $set: {sentiment: "positive", topic: $('#topic').val()}

    });

    Router.go('tweets', {_id: this.index + 1});

  },

  "click .neutral": function (e) {

    var topic = $(e.target).find('[name=topic]').val();

    console.log("voted neutral");

    Tweets.update(this._id, {

      $set: {sentiment: "neutral", topic: $('#topic').val()}

    });

    Router.go('tweets', {_id: this.index + 1});

  },

  "click .negative": function () {

    console.log("voted negative");

    Tweets.update(this._id, {

      $set: {sentiment: "negative", topic: $('#topic').val()}

    });

    Router.go('tweets', {_id: this.index + 1});

  },

  "click .update-topic": function () {

    console.log("updated topic");

    Tweets.update(this._id, {

      $set: {topic: $('#topic').val()}

    });

    Router.go('tweets', {_id: this.index + 1});
  },  
});
