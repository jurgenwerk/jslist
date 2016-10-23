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

  frameworks: Ember.computed.alias('model'),
  filteredFrameworks: Ember.computed('frameworks.[]', 'routing', 'virtual-dom', 'uni-flow',
                                     '2-way-binding', 'templating', 'old-browsers', 'lazy', 'testing',
                                     'stable', 'mvc', 'state', 'ssr', 'functional', 'jsx', 'native',
                                     'full-stack', 'cli', function() {

    return this.get('frameworks').filter(framework => {
      let frameworkMatches = true;

      for (let filter of this.filters) {
        const filterName = filter.param;
        const filterValue = this.get(`${filter.param}`);
        if (filterValue != null && String(framework.get(`properties.${filterName}`)) != String(filterValue)) {
          frameworkMatches = false;
          break;
        }
      }

      return frameworkMatches;
    });
  }),

  filters: [
    {
      name: "Routing",
      param: "routing",
      tooltip: "Routing included by default"
    },
    {
      name: "Virtual DOM",
      param: "virtual-dom",
      tooltip: "Uses DOM diffing techniques for rendering and its derivatives"
    },
    {
      name: "CLI tools",
      param: "cli",
      tooltip: "Command line tools for development (bundling, testing, generators, ...)",
    },
    {
      name: "Unidirectional data flow",
      param: "uni-flow",
      tooltip: "Data flows in a single direction (opposite to 2-way-binding)"
    },
    {
      name: "2-way binding",
      param: "2-way-binding"
    },
    {
      name: "Templating engine",
      param: "templating",
      tooltip: "String templates with their own rendering DSL"
    },
    {
      name: "JSX",
      param: "jsx",
      tooltip: "JavaScript based templating"
    },
    {
      name: "Old browser support",
      param: "old-browsers",
      tooltip: "< IE9 support"
    },
    {
      name: "Lazy module loading",
      param: "lazy",
      tooltip: "Loading parts of the app only when needed"
    },
    {
      name: "Integrated testing",
      param: "testing",
      tooltip: "Testing tools included by default"
    },
    {
      name: "Stable",
      param: "stable",
      tooltip: "Stable releases and follows Semantic Versioning"
    },
    {
      name: "MVC",
      param: "mvc",
      tooltip: "Based on Model-View-Controller and its derivatives (MVVM,...)"
    },
    {
      name: "Integrated state management",
      param: "state"
    },
    {
      name: "Server side rendering",
      param: "ssr"
    },
    {
      name: "Functional",
      param: "functional",
      tooltip: ""
    },
    {
      name: "Native",
      param: "native",
      tooltip: "For making standalone, native apps"
    },
    {
      name: "Full stack",
      param: "full-stack",
      tooltip: "Includes back-end"
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


// "routing": null,
// "virtual-dom": null,
// "uni-flow": null,
// "2-way-binding": null,
// "templating": null,
// "old-browsers": null,
// "lazy": null,
// "testing": null,
// "stable": null,
// "mvc": null,
// "state": null,
// "ssr": null,
// "functional": null,
// "jsx": null,
// "native": null,
// "full-stack": null,
// "cli": null
