if (Tweets.find().count() === 0) {
  Tweets.insert({"index": 1, "positive": 0, "neutral": 0, "negative": 0, "voted_by": [], "created_at":"Tue Nov 03 14:13:42 +0000 2015","id":661546799761629184,"id_str":"661546799761629184","text":".@TrayJoinzz Welcome to Puffalo  https:\/\/t.co\/cYDDu6qbUQ", "screen_name": "bigbizzinc"});

  Tweets.insert({"index": 2, "positive": 0, "neutral": 0, "negative": 0, "voted_by": [], "created_at":"Tue Nov 03 14:13:42 +0000 2015","id":661546799749046274,"id_str":"661546799749046274","text":"Man Cave Ideas is out! https:\/\/t.co\/ps0lPFprWQ Stories via @PenthouseQueen @GarageOrganiz @JonesGlassDeco"});

  Tweets.insert({"index": 3, "positive": 0, "neutral": 0, "negative": 0, "voted_by": [], "created_at":"Tue Nov 03 14:13:42 +0000 2015","id":661546799753240576,"id_str":"661546799753240576","text":"@spinney (If so, good job!)"});

  console.log("Added tweets.");

}
