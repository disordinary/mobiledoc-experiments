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
			this.$('#card-drop3')[0].addEventListener('dragstart', function (event) {
				return window.dragel = "slide-show";
			});
		}
	});
});
define('mobiledoc-experiments/components/form-body', ['exports', 'ember', 'mobiledoc-kit', 'mobiledoc-experiments/ghost-cards', 'mobiledoc-experiments/ghost-atoms', 'mobiledoc-experiments/ghost-sections', 'mobiledoc-experiments/ghost-markups'], function (exports, _ember, _mobiledocKit, _mobiledocExperimentsGhostCards, _mobiledocExperimentsGhostAtoms, _mobiledocExperimentsGhostSections, _mobiledocExperimentsGhostMarkups) {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var something = "SOMETHING";

  var mobiledoc = {
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
    this._dom = null;
  };

  exports['default'] = _ember['default'].Component.extend({
    cards: _mobiledocExperimentsGhostCards['default'],
    didRender: function didRender() {
      var options = { mobiledoc: mobiledoc, sections: _mobiledocExperimentsGhostSections['default'], cards: _mobiledocExperimentsGhostCards['default'], markups: _mobiledocExperimentsGhostMarkups['default'], atoms: _mobiledocExperimentsGhostAtoms['default'] };
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
          var mark = editor.builder.createMarkup("mark", { "data-comment-id": editor.comments.push(new Comment(0, "")) });
          //postEditor.toggleMarkup(mark); //temporary solution as href is the only allowed attribute right now.
          postEditor.addMarkupToRange(postEditor._range, mark);
          /*let atom;
          let { range } = ed;
          ed.run(postEditor => {
            let position = range.head;
            position.offset++;
            atom = postEditor.builder.createAtom("comment", "", {});
            postEditor.insertMarkers(position, [atom]);
          });*/
        });
      };

      editor.render(this.$('.body')[0]);
    }
  });
});
define('mobiledoc-experiments/ghost-atoms/comment', ['exports'], function (exports) {
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var comment = (function () {
		function comment() {
			_classCallCheck(this, comment);

			this.name = 'comment';
			this.type = 'dom';
		}

		_createClass(comment, [{
			key: 'render',
			value: function render(_ref) {
				var env = _ref.env;
				var options = _ref.options;
				var value = _ref.value;
				var payload = _ref.payload;

				return document.createTextNode('COMMENT');
			}
		}]);

		return comment;
	})();

	exports['default'] = comment;
	;
});
define('mobiledoc-experiments/ghost-atoms/index', ['exports', 'mobiledoc-experiments/ghost-atoms/comment'], function (exports, _mobiledocExperimentsGhostAtomsComment) {
	exports['default'] = [new _mobiledocExperimentsGhostAtomsComment['default']()];
});
define('mobiledoc-experiments/ghost-cards/card', ['exports'], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Card = (function () {
    function Card() {
      _classCallCheck(this, Card);

      this.name = 'card';
      this.previewName = 'card';
      this.previewImage = 'http://Chartholdr.io/line/160/100';
      this.type = 'dom';
      this.resizeMode = this.resizeModeEnum.both;
    }

    _createClass(Card, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        this.doFloat(env, payload);
      }
    }, {
      key: 'preview',
      value: function preview() {
        //returns a place holder
      }
    }, {
      key: 'doFloat',
      value: function doFloat(env, payload) {
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
         this.previewName = 'graph';
      }

      _createClass(Graph, [{
         key: 'render',
         value: function render(_ref) {
            var env = _ref.env;
            var options = _ref.options;
            var payload = _ref.payload;

            _get(Object.getPrototypeOf(Graph.prototype), 'doFloat', this).call(this, env, payload);
            var img = document.createElement('img');
            switch (payload.pos) {
               case "left":
                  img.src = "http://Chartholdr.io/pie/400";
                  break;
               case "right":
                  img.src = "http://Chartholdr.io/line/400/400";
                  break;
               default:
                  img.src = "http://Chartholdr.io/bar/800/400";
            }

            return img;
         }
      }]);

      return Graph;
   })(_mobiledocExperimentsGhostCardsCard['default']);

   exports['default'] = Graph;
});
define('mobiledoc-experiments/ghost-cards/index', ['exports', 'mobiledoc-experiments/ghost-cards/kitten', 'mobiledoc-experiments/ghost-cards/graph', 'mobiledoc-experiments/ghost-cards/slide-show'], function (exports, _mobiledocExperimentsGhostCardsKitten, _mobiledocExperimentsGhostCardsGraph, _mobiledocExperimentsGhostCardsSlideShow) {
	exports['default'] = [new _mobiledocExperimentsGhostCardsKitten['default'](), new _mobiledocExperimentsGhostCardsGraph['default'](), new _mobiledocExperimentsGhostCardsSlideShow['default']()];
});
define('mobiledoc-experiments/ghost-cards/kitten', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Kitten = (function (_Card) {
    _inherits(Kitten, _Card);

    function Kitten() {
      _classCallCheck(this, Kitten);

      _get(Object.getPrototypeOf(Kitten.prototype), 'constructor', this).call(this);
      this.name = 'kitten';
      this.previewName = 'kitten';
      this.previewImage = 'https://placekitten.com/160/100';
    }

    _createClass(Kitten, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(Kitten.prototype), 'doFloat', this).call(this, env, payload);

        var img = document.createElement('img');

        switch (payload.pos) {
          case "left":
            img.src = "https://placekitten.com/400/400";
            break;
          case "right":
            img.src = "https://placekitten.com/401/401";
            break;
          default:
            img.src = "https://placekitten.com/800/400";
        }
        return img;
      }
    }]);

    return Kitten;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = Kitten;
});
define('mobiledoc-experiments/ghost-cards/slide-show', ['exports', 'mobiledoc-experiments/ghost-cards/card', 'jquery'], function (exports, _mobiledocExperimentsGhostCardsCard, _jquery) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var SlideShow = (function (_Card) {
    _inherits(SlideShow, _Card);

    function SlideShow() {
      _classCallCheck(this, SlideShow);

      _get(Object.getPrototypeOf(SlideShow.prototype), 'constructor', this).call(this);
      this.name = 'slide-show';
      this.previewName = 'slide show';
      this.previewImage = '/assets/cards/picture-preview.png';
    }

    _createClass(SlideShow, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(SlideShow.prototype), 'doFloat', this).call(this, env, payload);
        if (!payload.images) payload.images = [];
        var holder = document.createElement('div');
        var img = document.createElement("img");
        var img2 = document.createElement("img");
        img.style.width = "100%";
        img2.style.width = "100%";
        img.style.position = "absolute";
        img2.style.position = "absolute";
        holder.style.position = "relative";

        env.postModel.renderNode.element.style.border = "1px solid black";
        env.postModel.renderNode.element.style.width = '400px';
        env.postModel.renderNode.element.style.height = '400px';
        env.postModel.renderNode.element.style.overflow = "hidden";
        env.postModel.renderNode.element.addEventListener("dragover", function (e) {
          console.log("DRAGGING OVER");
          e.preventDefault();
        }, false);
        env.postModel.renderNode.element.addEventListener("drop", function (e) {
          e.preventDefault();
          var file = e.dataTransfer.files[0];
          var reader = new FileReader();
          reader.onload = function (e) {

            payload.images.push(e.target.result);

            img.src = e.target.result;
          };

          reader.readAsDataURL(file);
        }, false);

        var arrayCursor = 0;
        setInterval(function (_) {
          if (arrayCursor & 1) {
            img.src = payload.images[arrayCursor];
            (0, _jquery['default'])(img).fadeIn();
            (0, _jquery['default'])(img2).fadeOut();
          } else {
            img2.src = payload.images[arrayCursor];
            (0, _jquery['default'])(img2).fadeIn();
            (0, _jquery['default'])(img).fadeOut();
          }

          arrayCursor++;
          if (arrayCursor >= payload.images.length) {
            arrayCursor = 0;
          }
        }, 2000);
        holder.appendChild(img);
        holder.appendChild(img2);
        return holder;
      }
    }]);

    return SlideShow;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = SlideShow;
});
define("mobiledoc-experiments/ghost-markups/comment", ["exports"], function (exports) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Comment = (function () {
    function Comment() {
      _classCallCheck(this, Comment);

      this.tagName = "mark";
      this.commentEl = null;
    }

    _createClass(Comment, [{
      key: "render",
      value: function render(env) {
        var _this = this;

        env.onDelete(function (e) {
          return alert("DELETE!");
        });
        env.didRender(function (e) {
          var commentOffset = env.element.attributes.getNamedItem('data-comment-id');
          if (commentOffset == undefined || commentOffset == null) {
            throw new Error("No comment offset");
          }

          _this._comment = env.editor.comments[commentOffset.value - 1];
          var tag = _this.lazyCreateComment(document.getElementsByTagName('body')[0]);
          var clientRect = env.element.getBoundingClientRect();
          tag.style.top = clientRect.top + 'px';
          tag.style.right = 100 + 'px';
        });
        env.onTeardown(function (e) {
          return alert("TEAR DOWN");
        });
        env.element.addEventListener("mouseenter", function (event) {
          event.target.style = "background-color:red;";
        });

        env.element.addEventListener("mouseleave", function (event) {
          event.target.style = "";
        });

        //env.onTeardown( _ => alert("TEARDOWN"));
      }
    }, {
      key: "lazyCreateComment",
      value: function lazyCreateComment(root) {
        if (this._comment._dom) return this._comment._dom;
        var tag = document.createElement("div");
        var text = document.createElement("textarea");
        tag.appendChild(text);
        tag.className = "comment";
        tag.style.position = "absolute";
        root.appendChild(tag);
        this._comment._dom = tag;
        return tag;
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
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
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
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["content", "form-body", ["loc", [null, [2, 0], [2, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("mobiledoc-experiments/templates/components/card-picker", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.1",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 1
            },
            "end": {
              "line": 8,
              "column": 1
            }
          },
          "moduleName": "mobiledoc-experiments/templates/components/card-picker.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "card-drop");
          dom.setAttribute(el1, "draggable", "true");
          var el2 = dom.createElement("label");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'style');
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [0]), 0, 0);
          return morphs;
        },
        statements: [["attribute", "style", ["concat", ["background-image: url('", ["get", "card.previewImage", ["loc", [null, [7, 74], [7, 91]]]], "')"]]], ["content", "card.previewName", ["loc", [null, [7, 104], [7, 124]]]]],
        locals: ["card"],
        templates: []
      };
    })();
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
            "line": 9,
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
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "card-drop3");
        dom.setAttribute(el2, "draggable", "true");
        var el3 = dom.createTextNode("card-picker");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 7, 7);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "each", [["get", "cards", ["loc", [null, [6, 9], [6, 14]]]]], [], 0, null, ["loc", [null, [6, 1], [8, 10]]]]],
      locals: [],
      templates: [child0]
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
            "line": 18,
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
        var el2 = dom.createTextNode("\n	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["inline", "card-picker", [], ["cards", ["subexpr", "@mut", [["get", "cards", ["loc", [null, [16, 20], [16, 25]]]]], [], []]], ["loc", [null, [16, 0], [16, 27]]]], ["content", "yield", ["loc", [null, [17, 0], [17, 9]]]]],
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
  require("mobiledoc-experiments/app")["default"].create({"name":"mobiledoc-experiments","version":"0.0.0+815955d3"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-experiments.map