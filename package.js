// Meteor package definition.
Package.describe({
  name: 'aramk:external-links',
  version: '0.1.1',
  summary: 'Opens links to external domains in another window',
  git: 'https://github.com/aramk/meteor-external-links.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use([
    'ecmascript',
    'underscore',
    'jquery'
  ], 'client');
  api.addFiles([
    'src/links.js'
  ], 'client');
});
