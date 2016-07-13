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
define('mobiledoc-experiments/components/card-picker', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('mobiledoc-experiments/components/form-body', ['exports', 'ember', 'mobiledoc-kit'], function (exports, _ember, _mobiledocKit) {

  //import cards from '../cards/index.js';

  var simpleMobiledoc = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, "h1", [[0, [], 0, "Title"]]], [1, "p", [[0, [], 0, "Body"]]]]
  };

  var section = {
    tagName: "p",
    //onCreate : _ => alert("CREATE"),
    render: function render(env) {
      env.element.addEventListener("mouseenter", function (event) {});

      env.element.addEventListener("mouseleave", function (event) {
        event.target.className = '';
      });
      env.element.addEventListener("drop", function (event) {
        env.editor.run(function (postEditor) {
          var offset = event.srcElement.getBoundingClientRect();
          var mouseX = event.pageX - offset.left;
          var mouseY = event.pageY - offset.top;
          var pos = "top";

          if (mouseX < 33) {
            pos = "left";
          } else if (mouseX > offset.width - 33) {
            pos = "right";
          } else if (mouseY > offset.height / 2) {
            pos = "bottom";
          } else {
            pos = "top";
          }
          if (pos === "bottom") {
            pos = "top";
            console.log("INSERTING AT BOTTOM");
            var card = postEditor.builder.createCardSection("testCard", { pos: pos });
            postEditor.insertSectionBefore(env.editor.post.sections, card, env.section.next);
          } else {
            console.log("INSERTING AT TOP");
            var card = postEditor.builder.createCardSection("testCard", { pos: pos });
            postEditor.insertSectionBefore(env.editor.post.sections, card, env.section);
          }
        });
        event.target.className = '';
      });
      env.element.addEventListener("dragenter", function (event) {});

      env.element.addEventListener("dragover", function (event) {
        var offset = event.srcElement.getBoundingClientRect();
        var mouseX = event.pageX - offset.left;
        var mouseY = event.pageY - offset.top;

        if (mouseX < 33) {
          event.srcElement.className = 'dropper-left';
        } else if (mouseX > offset.width - 33) {
          event.srcElement.className = 'dropper-right';
        } else if (mouseY > offset.height / 2) {
          event.srcElement.className = 'dropper-bottom';
        } else {
          event.srcElement.className = 'dropper-top';
        }

        event.preventDefault();
      }, false);

      env.element.addEventListener("dragleave", function (event) {
        event.target.className = '';
      });
    }
    //onDelete : _ => alert("DID DELETE")
  };

  var markup = {
    tagName: "mark",
    //onCreate : _ => alert("CREATE"),
    render: function render(env) {
      env.element.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color:red;";
      });

      env.element.addEventListener("mouseleave", function (event) {
        event.target.style = "";
      });
    }
    //onDelete : _ => alert("DID DELETE")
  };

  var testCard = {
    name: 'testCard',
    type: 'dom',
    render: function render(_ref) {
      var env = _ref.env;
      var options = _ref.options;
      var payload = _ref.payload;

      switch (payload.pos) {
        case "left":
          env.postModel.renderNode.element.className = "card-left";
          break;
        case "right":
          env.postModel.renderNode.element.className = "card-right";
          break;
        default:
          env.postModel.renderNode.element.className = "card";

      }

      var test = document.createElement('div');
      test.className = "test";
      return test;
    }
  };

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var options = { mobiledoc: simpleMobiledoc, sections: [section], cards: [testCard], markups: [markup] };
      var editor = new _mobiledocKit['default'].Editor(options);

      this.$('#h1')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleSection('h1');
        });
      };
      this.$('#card')[0].onclick = function (_) {
        return editor.insertCard("testCard");
      };
      this.$('#b')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          console.log(postEditor);
          var card = postEditor.builder.createCardSection("testCard");
          postEditor.insertSectionBefore(editor.post.sections, card, editor.range.tail.section);
          //postEditor.insertMarkers(editor.range.head, [card]);
        });
      }; //editor.run( postEditor => console.log( postEditor , editor ) );//editor.run(postEditor => {postEditor.toggleMarkup('strong');});
      this.$('#i')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleMarkup('em');
        });
      };
      this.$('#comment')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleMarkup('mark');
        });
      };

      editor.render(this.$('.body')[0]);
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
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 15
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("content");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "form-toolbar", ["loc", [null, [1, 0], [1, 16]]]], ["content", "form-body", ["loc", [null, [4, 0], [4, 13]]]], ["content", "card-picker", ["loc", [null, [7, 0], [7, 15]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-experiments/templates/components/card-picker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
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
            "column": 6
          }
        },
        "moduleName": "mobiledoc-experiments/templates/components/card-picker.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "card");
        dom.setAttribute(el2, "draggable", "true");
        var el3 = dom.createTextNode("card");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-experiments/templates/components/form-body", ["exports"], function (exports) {
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
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "mobiledoc-experiments/templates/components/form-body.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "content");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "h1");
        var el3 = dom.createTextNode("H1");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "b");
        var el3 = dom.createTextNode("B");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "i");
        var el3 = dom.createTextNode("I");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "card");
        var el3 = dom.createTextNode("card");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "id", "comment");
        var el3 = dom.createTextNode("Comment");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "body");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [10, 0], [10, 9]]]]],
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
  require("mobiledoc-experiments/app")["default"].create({"name":"mobiledoc-experiments","version":"0.0.0+dffacb10"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-experiments.map