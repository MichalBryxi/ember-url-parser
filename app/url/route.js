import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // This hack allows us to create new record and transparently transition into it
    if (Ember.isEmpty(this.paramsFor('url.show').id)) {
      var url = this.store.createRecord('url', {value: 'http://localhost:4200/#/posts/11/edit?hideName=true&selected=body'});
      this.transitionTo('url.show', url.id);
    }
  }
});
