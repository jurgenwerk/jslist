import Ember from 'ember';
import DS from 'ember-data';
import ENV from "../config/environment";

export default DS.RESTAdapter.extend({
  namespace: ENV.apiNamespace,
  host: ENV.serverURL
});
