"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('mobiledoc-experiments/app', ['exports', 'ember', 'mobiledoc-experiments/resolver', 'ember-load-initializers', 'mobiledoc-experiments/config/environment'], function (exports, _ember, _mobiledocExperimentsResolver, _emberLoadInitializers, _mobiledocExperimentsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _mobiledocExperimentsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mobiledocExperimentsConfigEnvironment['default'].podModulePrefix,
    Resolver: _mobiledocExperimentsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _mobiledocExperimentsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("mobiledoc-experiments/cards/index", ["exports"], function (exports) {
  exports["default"] = cards = "test";
});
define('mobiledoc-experiments/cards/testCard', ['exports'], function (exports) {
  exports['default'] = testCard = {
    name: 'testCard',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var options = _ref.options;
      var payload = _ref.payload;

      var test = document.createElement('div');
      test.className = "test";
      return test;
    }
  };
});
define('mobiledoc-experiments/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'mobiledoc-experiments/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mobiledocExperimentsConfigEnvironment) {

  var name = _mobiledocExperimentsConfigEnvironment['default'].APP.name;
  var version = _mobiledocExperimentsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('mobiledoc-experiments/components/mobile-doc', ['exports', 'ember', 'mobiledoc-kit', 'mobiledoc-experiments/cards/index.js'], function (exports, _ember, _mobiledocKit, _mobiledocExperimentsCardsIndexJs) {

  var simpleMobiledoc = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, "p", [[0, [], 0, "Welcome to Mobiledoc"]]]]
  };

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var options = { mobiledoc: simpleMobiledoc };
      var editor = new _mobiledocKit['default'].Editor(options);

      editor.render(document.getElementById('editor'));
    }
  });
});
define('mobiledoc-experiments/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('mobiledoc-experiments/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('mobiledoc-experiments/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'mobiledoc-experiments/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _mobiledocExperimentsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_mobiledocExperimentsConfigEnvironment['default'].APP.name, _mobiledocExperimentsConfigEnvironment['default'].APP.version)
  };
});
define('mobiledoc-experiments/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('mobiledoc-experiments/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('mobiledoc-experiments/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('mobiledoc-experiments/initializers/export-application-global', ['exports', 'ember', 'mobiledoc-experiments/config/environment'], function (exports, _ember, _mobiledocExperimentsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_mobiledocExperimentsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _mobiledocExperimentsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_mobiledocExperimentsConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('mobiledoc-experiments/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('mobiledoc-experiments/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('mobiledoc-experiments/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("mobiledoc-experiments/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('mobiledoc-experiments/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('mobiledoc-experiments/router', ['exports', 'ember', 'mobiledoc-experiments/config/environment'], function (exports, _ember, _mobiledocExperimentsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _mobiledocExperimentsConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('mobiledoc-experiments/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("mobiledoc-experiments/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 14
          }
        },
        "moduleName": "mobiledoc-experiments/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("application");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "mobile-doc", ["loc", [null, [2, 0], [2, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-experiments/templates/components/mobile-doc", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-experiments/templates/components/mobile-doc.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("ed");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "editor");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [4, 0], [4, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('mobiledoc-experiments/config/environment', ['ember'], function(Ember) {
  var prefix = 'mobiledoc-experiments';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("mobiledoc-experiments/app")["default"].create({"name":"mobiledoc-experiments","version":"0.0.0+851584b4"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-experiments.map