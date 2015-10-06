import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('records', {path: '/records'}, function () {
    this.route('record', {path: '/:id'});
  });
});

export default Router;
