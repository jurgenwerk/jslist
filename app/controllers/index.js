import Ember from 'ember';

export default Ember.Controller.extend({
  frameworks: [
    {
      id: 1,
      name: "Ember",
      website: "http://emberjs.com",
      logoUrl: "http://i.imgur.com/b74CDWt.png",
      stars: 1244,
      jobs: 40,
      size: 38,
      jsidx: 82,
      future: 74
    },
    {
      id: 2,
      name: "Angular",
      website: "http://angular.com",
      logoUrl: "http://i.imgur.com/qqZNCEe.png",
      stars: 543,
      jobs: 70,
      size: 43,
      jsidx: 38,
      future: 59
    },
    {
      id: 3,
      name: "React",
      website: "http://react.com",
      logoUrl: "http://i.imgur.com/XVCfKgG.png",
      stars: 1403,
      jobs: 75,
      size: 233,
      jsidx: 79,
      future: 23
    },
    {
      id: 4,
      name: "Angular 2",
      website: "http://meteor.com",
      jobs: 10,
      size: 134,
      jsidx: 21,
      future: 1
    },
    {
      id: 5,
      name: "Elm",
      website: "http://elm.com",
      jobs: 3,
      size: 134,
      jsidx: 21,
      future: 7
    },
    {
      id: 4,
      name: "Meteor",
      website: "http://meteor.com",
      jobs: 10,
      size: 134,
      jsidx: 21,
      future: 1
    },
    {
      id: 4,
      name: "Cycle",
      website: "http://meteor.com",
      jobs: 10,
      size: 134,
      jsidx: 21,
      future: 1
    },
    {
      id: 4,
      name: "Polymer",
      website: "http://meteor.com",
      jobs: 10,
      size: 134,
      jsidx: 21,
      future: 1
    }
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
