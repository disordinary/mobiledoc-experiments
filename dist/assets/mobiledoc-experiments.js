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
define('mobiledoc-experiments/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'mobiledoc-experiments/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _mobiledocExperimentsConfigEnvironment) {

  var name = _mobiledocExperimentsConfigEnvironment['default'].APP.name;
  var version = _mobiledocExperimentsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('mobiledoc-experiments/components/card-picker', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		didRender: function didRender() {
			this.$('#card-drop')[0].addEventListener('dragstart', function (event) {
				return window.dragel = "kitten";
			});
			this.$('#card-drop2')[0].addEventListener('dragstart', function (event) {
				return window.dragel = "graph";
			});
		}
	});
});
define('mobiledoc-experiments/components/form-body', ['exports', 'ember', 'mobiledoc-kit', 'mobiledoc-experiments/ghost-cards', 'mobiledoc-experiments/ghost-atoms', 'mobiledoc-experiments/ghost-sections', 'mobiledoc-experiments/ghost-markups'], function (exports, _ember, _mobiledocKit, _mobiledocExperimentsGhostCards, _mobiledocExperimentsGhostAtoms, _mobiledocExperimentsGhostSections, _mobiledocExperimentsGhostMarkups) {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var simpleMobiledoc = {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: [[1, "h1", [[0, [], 0, "Title"]]], [1, "p", [[0, [], 0, "Body"]]]]
  };

  var Comment = function Comment(user, comment) {
    _classCallCheck(this, Comment);

    this.user = user;
    this.comment = comment;
  };

  exports['default'] = _ember['default'].Component.extend({
    didRender: function didRender() {
      var options = { mobiledoc: simpleMobiledoc, sections: _mobiledocExperimentsGhostSections['default'], cards: _mobiledocExperimentsGhostCards['default'], markups: _mobiledocExperimentsGhostMarkups['default'] };
      var editor = new _mobiledocKit['default'].Editor(options);

      editor.comments = [];

      this.$('#h1')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleSection('h1');
        });
      };
      this.$('#b')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleMarkup('strong');
        });
      };
      this.$('#i')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleMarkup('em');
        });
      };
      this.$('#comment')[0].onclick = function (_) {
        return editor.run(function (postEditor) {
          postEditor.toggleMarkup(editor.builder.createMarkup("mark", { href: editor.comments.push(new Comment(0, "")) })); //temporary solution as href is the only allowed attribute right now.
        });
      };

      editor.render(this.$('.body')[0]);
    }
  });
});
define("mobiledoc-experiments/ghost-atoms/index", ["exports"], function (exports) {
  exports["default"] = [];
});
define('mobiledoc-experiments/ghost-cards/card', ['exports'], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Card = (function () {
    function Card() {
      _classCallCheck(this, Card);

      this.name = 'kitten';
      this.type = 'dom';
      this.resizeMode = this.resizeModeEnum.both;
    }

    _createClass(Card, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        var img = document.createElement('img');
        switch (payload.pos) {
          case "left":
            env.postModel.renderNode.element.className = "card-left";
            img.src = "https://placekitten.com/400/400";
            break;
          case "right":
            env.postModel.renderNode.element.className = "card-right";
            img.src = "https://placekitten.com/401/401";
            break;
          default:
            env.postModel.renderNode.element.className = "card";
            img.src = "https://placekitten.com/800/400";
        }

        return img;
      }
    }, {
      key: 'resizeModeEnum',
      get: function get() {
        return {
          full_width_only: Symbol(),
          half_width_only: Symbol(),
          both: Symbol()
        };
      }
    }]);

    return Card;
  })();

  exports['default'] = Card;
});
define('mobiledoc-experiments/ghost-cards/graph', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Graph = (function (_Card) {
    _inherits(Graph, _Card);

    function Graph() {
      _classCallCheck(this, Graph);

      _get(Object.getPrototypeOf(Graph.prototype), 'constructor', this).call(this);
      this.name = 'graph';
      this.type = 'dom';
    }

    _createClass(Graph, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        var img = document.createElement('img');
        switch (payload.pos) {
          case "left":
            env.postModel.renderNode.element.className = "card-left";
            img.src = "http://Chartholdr.io/pie/400";
            break;
          case "right":
            env.postModel.renderNode.element.className = "card-right";
            img.src = "http://Chartholdr.io/line/400/400";
            break;
          default:
            env.postModel.renderNode.element.className = "card";
            img.src = "http://Chartholdr.io/bar/800/400";
        }

        return img;
      }
    }]);

    return Graph;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = Graph;
});
define('mobiledoc-experiments/ghost-cards/index', ['exports', 'mobiledoc-experiments/ghost-cards/card', 'mobiledoc-experiments/ghost-cards/graph'], function (exports, _mobiledocExperimentsGhostCardsCard, _mobiledocExperimentsGhostCardsGraph) {
	exports['default'] = [new _mobiledocExperimentsGhostCardsCard['default'](), new _mobiledocExperimentsGhostCardsGraph['default']()];
});
define("mobiledoc-experiments/ghost-markups/comment", ["exports"], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Comment = (function () {
    function Comment() {
      _classCallCheck(this, Comment);

      this.tagName = "mark";
    }

    _createClass(Comment, [{
      key: "render",
      value: function render(env) {
        console.log(env);
        env.element.addEventListener("mouseenter", function (event) {
          event.target.style = "background-color:red;";
        });

        env.element.addEventListener("mouseleave", function (event) {
          event.target.style = "";
        });

        //env.onTeardown( _ => alert("TEARDOWN"));
      }
    }]);

    return Comment;
  })();

  exports["default"] = Comment;
});
define('mobiledoc-experiments/ghost-markups/index', ['exports', 'mobiledoc-experiments/ghost-markups/comment'], function (exports, _mobiledocExperimentsGhostMarkupsComment) {
	exports['default'] = [new _mobiledocExperimentsGhostMarkupsComment['default']()];
});
define('mobiledoc-experiments/ghost-sections/index', ['exports', 'mobiledoc-experiments/ghost-sections/section'], function (exports, _mobiledocExperimentsGhostSectionsSection) {
	exports['default'] = [new _mobiledocExperimentsGhostSectionsSection['default']()];
});
define("mobiledoc-experiments/ghost-sections/section", ["exports"], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Section = (function () {
    function Section() {
      _classCallCheck(this, Section);

      this.tagName = "p";
    }

    _createClass(Section, [{
      key: "render",
      value: function render(env) {
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

              var card = postEditor.builder.createCardSection(window.dragel || "kitten", { pos: pos });
              postEditor.insertSectionBefore(env.editor.post.sections, card, env.section.next);
            } else {

              var card = postEditor.builder.createCardSection(window.dragel || "kitten", { pos: pos });
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
    }]);

    return Section;
  })();

  exports["default"] = Section;
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
            "line": 6,
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
        dom.setAttribute(el1, "id", "card-holder");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "card-drop");
        dom.setAttribute(el2, "draggable", "true");
        var el3 = dom.createTextNode("kitten");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "card-drop2");
        dom.setAttribute(el2, "draggable", "true");
        var el3 = dom.createTextNode("chart");
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
            "line": 17,
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
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "toolbar");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "h1");
        var el4 = dom.createTextNode("H1");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "h2");
        var el4 = dom.createTextNode("H2");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "h3");
        var el4 = dom.createTextNode("H3");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "b");
        var el4 = dom.createTextNode("B");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "i");
        var el4 = dom.createTextNode("I");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "ul");
        var el4 = dom.createTextNode("UL");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "ul");
        var el4 = dom.createTextNode("OL");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "id", "comment");
        var el4 = dom.createTextNode("Comment");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
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
      statements: [["content", "yield", ["loc", [null, [16, 0], [16, 9]]]]],
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
  require("mobiledoc-experiments/app")["default"].create({"name":"mobiledoc-experiments","version":"0.0.0+cce3a147"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-experiments.map