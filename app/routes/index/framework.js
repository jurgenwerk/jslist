import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (transition.targetName === "index.framework.index") {
      this.transitionTo('index.framework.scores');
    }
  },
  model(params) {
    return this.modelFor('index').findBy('name', params.framework_name);
  },
  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});
