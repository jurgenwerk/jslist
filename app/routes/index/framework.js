import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return params;
  },
  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});
