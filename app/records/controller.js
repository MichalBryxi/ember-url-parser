import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRecord: function () {
      var record = this.store.createRecord('record', {url: 'http://localhost:4200/#/posts/11/edit?hideName=true&selected=body'});
      record.save();
    }
  }
});
