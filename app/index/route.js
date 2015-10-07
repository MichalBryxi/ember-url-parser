import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var url = this.store.createRecord('url', {value: 'http://localhost:4200/#/posts/11/edit?hideName=true&selected=body'});
    this.transitionTo('url', url.id);
  }
});
