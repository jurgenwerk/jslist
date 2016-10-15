import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (transition.targetName === "index.framework.index") {
      this.transitionTo('index.framework.scores');
    }
  },
  model(params) {
    return params;
  },
  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});
