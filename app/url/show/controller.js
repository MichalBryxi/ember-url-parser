import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveUrl: function () {
      this.get('model').save();
    }
  }
});
