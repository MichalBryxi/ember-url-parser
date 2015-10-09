import Ember from 'ember';
import Qs from 'npm:qs';

function hashToQueryParamsParsed(hash) {
  var queryString = hash.replace(/.*\?/, ''),
      queryParams = Qs.parse(queryString);
  return queryParams;
}

function hashToQueryParamsLines(hash) {
  var queryString = hash.replace(/.*\?/, ''),
      queryParamsArray = queryString.split('&').sort(),
      queryParamsLines = queryParamsArray.join('\n');
  return queryParamsLines;
}

export default Ember.Component.extend({
  parser1: function () {
    var parser = document.createElement('a');
    parser.href = this.get('url1');

    return parser;
  }.property('url1'),

  parser2: function () {
    var parser = document.createElement('a');
    parser.href = this.get('url2');

    return parser;
  }.property('url2'),

  hashes: function () {
    return [this.get('parser1.hash'), this.get('parser2.hash')];
  }.property('parser1.hash', 'parser2.hash'),

  routes: function () {
    return this.get('hashes').map(function (hash) {
      return hash.replace(/\?.*/, '');
    });
  }.property('hashes'),

  queryParams: function () {
    return this.get('hashes').map(function (hash) {
      return hashToQueryParamsLines(hash);
      // return hashToQueryParamsParsed(hash);
    });
  }.property('hashes'),
});
