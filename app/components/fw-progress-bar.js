import Ember from 'ember';

export default Ember.Component.extend({
  valueSafe: Ember.computed('value', function() {
    return new Ember.String.htmlSafe(this.get('value'));
  })
});
