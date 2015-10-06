import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var record = this.store.createRecord('record', {url: 'http://localhost:4200/#/posts/11/edit?hideName=true&selected=body'});
    this.transitionTo('records.record', record.id);
  }
});
