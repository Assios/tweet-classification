Template.tweet.events({

  "click .positive": function () {

    console.log("voted positive");

    Tweets.update(this._id, {

      $set: {sentiment: "positive"}

    });

    Router.go('tweet', {_id: this.index + 1});

  },

  "click .neutral": function () {

    console.log("voted neutral");

    Tweets.update(this._id, {

      $set: {sentiment: "neutral"}

    });

    Router.go('tweet', {_id: this.index + 1});

  },

  "click .negative": function () {

    console.log("voted negative");

    Tweets.update(this._id, {

      $set: {sentiment: "negative"}

    });

    Router.go('tweet', {_id: this.index + 1});

  }
});
