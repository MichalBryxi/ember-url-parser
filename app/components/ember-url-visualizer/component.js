import Ember from 'ember';

export default Ember.Component.extend({
  protocol: function () {
    return this.get('parser.protocol');
  }.property('parser'),

  host: function () {
    return this.get('parser.host');
  }.property('parser'),

  hostname: function () {
    return this.get('parser.hostname');
  }.property('parser'),

  port: function () {
    return this.get('parser.port');
  }.property('parser'),

  pathname: function () {
    return this.get('parser.pathname');
  }.property('parser'),

  search: function () {
    return this.get('parser.search');
  }.property('parser'),

  hash: function () {
    return this.get('parser.hash');
  }.property('parser'),

  route: function () {
    return this.get('parser.hash').replace(/\?.*/, '');
  }.property('parser'),

  queryParams: function () {
   return this.get('parser.hash').replace(/.*\?/, '').split('&').map(function (item) {
      var elm = item.split('=');
      return {key: elm[0], value: elm[1]};
    });
  }.property('parser'),

  parser: function () {
    var parser = document.createElement('a');
    parser.href = this.get('url');

    return parser;
  }.property('url'),

  standardizedUrl: function () {
    return this.get('url').replace('#', '');
  }.property('url')
});
