import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['list-group-item'],
  classNameBindings: ['isSame:row-is-same:row-is-different'],

  isSame: function () {
    return this.get('a') === this.get('b');
  }.property('a', 'b'),
});
