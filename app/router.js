import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' }, function() {
    this.route('framework', { path: '/:framework_id' }, function() {
      this.route('scores');
      this.route('jobs');
      this.route('community');
      this.route('creators');
      this.route('compare');
    });
  })
});

export default Router;
