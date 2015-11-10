if (Tweets.find().count() === 0) {
  Tweets.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Tweets.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Tweets.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
