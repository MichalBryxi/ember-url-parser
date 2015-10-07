import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('url', params.id).then((item) => {
      return item;
    }, (reason) => {
      this.transitionTo('index');
    });
  }
});
