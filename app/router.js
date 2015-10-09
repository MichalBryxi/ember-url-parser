import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('url', {path: '/url/:id'});
  this.route('urls', {path: '/urls'});

  this.route('compare', {path: '/compare'});
  this.route('about', {});
});

export default Router;
