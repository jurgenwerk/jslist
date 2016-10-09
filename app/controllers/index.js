import Ember from 'ember';

export default Ember.Controller.extend({
  frameworks: [
    {
      id: 1,
      name: "Ember.js",
      website: "http://emberjs.com"
    },
    {
      id: 2,
      name: "Angular",
      website: "http://angular.com"
    },
    {
      id: 3,
      name: "React",
      website: "http://react.com"
    },
    {
      id: 4,
      name: "Metor",
      website: "http://metor.com"
    },
  ],
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
      name: "Up-and-coming",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Going out of fashion",
      bgUrl: "",
      link: "#"
    },
    {
      name: "Best for MVPs",
      bgUrl: "",
      link: "#"
    }
  ]
});
