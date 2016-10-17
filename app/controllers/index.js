import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['routing', 'virtual-dom', 'uni-flow', '2-way-binding', 'templating', 'old-browsers', 'cli',
                'lazy', 'testing', 'stable', 'mvc', 'state', 'ssr', 'functional', 'jsx', 'native', 'full-stack'],

  routing: null,
  "virtual-dom": null,
  "uni-flow": null,
  "2-way-binding": null,
  templating: null,
  "old-browsers": null,
  lazy: null,
  testing: null,
  stable: null,
  mvc: null,
  state: null,
  ssr: null,
  functional: null,
  jsx: null,
  "native": null,
  "full-stack": null,
  cli: null,

  filters: [
    {
      name: "Routing",
      param: "routing",
      tooltip: ""
    },
    {
      name: "Virtual DOM",
      param: "virtual-dom",
      tooltip: ""
    },
    {
      name: "CLI tools",
      param: "cli",
      tooltip: "",
    },
    {
      name: "Unidirectional data flow",
      param: "uni-flow",
      tooltip: ""
    },
    {
      name: "2-way binding",
      param: "2-way-binding",
      tooltip: ""
    },
    {
      name: "Templating engine",
      param: "templating",
      tooltip: ""
    },
    {
      name: "Old browser support",
      param: "old-browsers",
      tooltip: ""
    },
    {
      name: "Lazy module loading",
      param: "lazy",
      tooltip: ""
    },
    {
      name: "Integrated testing",
      param: "testing",
      tooltip: ""
    },
    {
      name: "Stable",
      param: "stable",
      tooltip: ""
    },
    {
      name: "MVC",
      param: "mvc",
      tooltip: ""
    },
    {
      name: "Integrated State management",
      param: "state",
      tooltip: ""
    },
    {
      name: "Server side rendering",
      param: "ssr",
      tooltip: ""
    },
    {
      name: "Functional",
      param: "functional",
      tooltip: ""
    },
    {
      name: "JSX",
      param: "jsx",
      tooltip: ""
    },
    {
      name: "Native",
      param: "native",
      tooltip: ""
    },
    {
      name: "Full stack",
      param: "full-stack",
      tooltip: ""
    }
  ],

  actions: {
    clearFilters() {
      for (let filter of this.filters) {
        this.set(filter.param, null);
      }
    },
    toggleFilter(filterName) {
      if (this[filterName]) {
        this.set(filterName, null);
      } else {
        this.set(filterName, true);
      }
    }
  },

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
      name: "Most jobs",
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
