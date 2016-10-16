import Ember from 'ember';

export default Ember.Controller.extend({
  frameworks: Ember.computed.alias('model'),
  collections: [
    // best communities, most jobs
    {
      name: "Highly performant",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Best for big applications",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Easiest to start with",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Most popular",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Best for MVPs",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Up-and-coming",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Going out of fashion",
      bgUrl: "",
      link: "#"
    }
  ]
});
