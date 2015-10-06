import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('record', params.id).then((item) => {
      console.log('found item', item);
      return item;
    }, (reason) => {
      console.log('resetting to default');
      this.transitionTo('index');
    });
  }
});
