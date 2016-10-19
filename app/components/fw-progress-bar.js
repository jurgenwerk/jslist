import Ember from 'ember';

export default Ember.Component.extend({
  style: Ember.computed('value', function() {
    return new Ember.String.htmlSafe(`width: ${this.get('value')}%`);
  })
});
