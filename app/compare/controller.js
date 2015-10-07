import Ember from 'ember';

export default Ember.Controller.extend({
  url1: 'http://localhost:4200/#/posts/11/edit?foo=bar&same-but-moved=true&delete=true&change=foo&y=will-delete',
  url2: 'https://localhost:4200/#/posts/12/change?foo=bar&add=true&change=bar&same-but-moved=true&z=will-add'
});
