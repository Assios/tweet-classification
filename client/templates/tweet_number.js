Template.tweetNumber.events({

  "click .positive": function () {

    console.log("voted positive");

    Tweets.update(this._id, {

      $inc: {positive: 1}

    });

  },

  "click .neutral": function () {

    console.log("voted neutral");

    Tweets.update(this._id, {

      $inc: {neutral: 1}

    });

  },

  "click .negative": function () {

    console.log("voted negative");

    Tweets.update(this._id, {

      $inc: {negative: 1}

    });
  }
});
