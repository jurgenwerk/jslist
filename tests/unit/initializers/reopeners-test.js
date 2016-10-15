import Ember from 'ember';
import ReopenersInitializer from 'jslist/initializers/reopeners';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | reopeners', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ReopenersInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
