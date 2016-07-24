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
define('mobiledoc-experiments/components/card-picker-card', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		didRender: function didRender() {
			var _this = this;

			this.element.addEventListener('dragstart', function (event) {
				return window.dragel = _this;
			});
		}
	});
});
define('mobiledoc-experiments/components/card-picker', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
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

      window.editor = editor; //make editor a global so that I can inspect it's state with the console.
    }
  });
});
define("mobiledoc-experiments/ghost-atoms/index", ["exports"], function (exports) {
	exports["default"] = [];
});
define('mobiledoc-experiments/ghost-cards/a-league', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var ALeague = (function (_Card) {
    _inherits(ALeague, _Card);

    function ALeague() {
      _classCallCheck(this, ALeague);

      _get(Object.getPrototypeOf(ALeague.prototype), 'constructor', this).call(this);
      this.name = 'a-league';
      this.previewName = 'a-league ladder';
      this.previewImage = 'http://www.wellingtonphoenix.com/di/library/Wellington_Phoenix/63/49/wellington-phoenix-and-asia-pacific-football-academy-team-up_00068412-leadimage.jpg?t=966402326&h=80&w=120&quality=85';
    }

    _createClass(ALeague, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(ALeague.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });
        var wrapper = document.createElement("div");
        var holder = document.createElement("div");

        holder.innerHTML = '<iframe src="http://widgets.soccerway.com/widget/free/classic/competition/283/8542#d=350x300&amp;f=table,table_colmp,table_colmw,table_colmd,table_colml,table_colgf,table_colga,results,fixtures,scroll&amp;cbackground=FFFFF&amp;ctext=000000&amp;ctitle=000000&amp;cshadow=E8E8E8&amp;cbutton=C0C0C0&amp;cbuttontext=000000&amp;chighlight=FF0000&amp;tbody_family=Tahoma,sans-serif&amp;tbody_size=9&amp;tbody_weight=normal&amp;tbody_style=normal&amp;tbody_decoration=none&amp;tbody_transform=none&amp;ttitle_family=Impact,sans-serif&amp;ttitle_size=13&amp;ttitle_weight=normal&amp;ttitle_style=normal&amp;ttitle_decoration=none&amp;ttitle_transform=none&amp;ttab_family=Tahoma,sans-serif&amp;ttab_size=9&amp;ttab_weight=normal&amp;ttab_style=normal&amp;ttab_decoration=none&amp;ttab_transform=none" width="350" height="300" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"></iframe>';

        wrapper.appendChild(holder);

        wrapper.style.width = "100%";
        wrapper.style.textAlign = "center";

        holder.style.display = "inline-block";

        return wrapper;
      }
    }]);

    return ALeague;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = ALeague;
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
      this.handle = createHandle();
    }

    _createClass(Card, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        var el = env.postModel.renderNode.element;
        el.insertBefore(createHandle(options), el.firstChild);
        switch (payload.pos) {
          case "left":
            el.className = "card-left";
            break;
          case "right":
            el.className = "card-right";
            break;
          default:
            el.className = "card";
        }
      }
    }, {
      key: 'preview',
      value: function preview() {
        //returns a place holder
      }
    }, {
      key: 'resizeModeEnum',
      get: function get() {
        return {
          full_width_only: "full_width_only",
          half_width_only: "half_width_only",
          both: "both"
        };
      }
    }]);

    return Card;
  })();

  exports['default'] = Card;

  function createHandle(options) {
    var holder = document.createElement('div');
    holder.contentEditable = "false";
    holder.className = "card-handle";
    if (options && options.onEdit) {
      var editButton = document.createElement('button');
      editButton.value = "Edit";
      editButton.type = "button";
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", options.onEdit);

      holder.appendChild(editButton);
    }

    var delButtion = document.createElement('button');
    delButtion.value = "Del";
    delButtion.type = "button";
    delButtion.innerHTML = "×";
    delButtion.addEventListener("click", function (e) {
      return alert("DELETE CARD");
    });

    holder.appendChild(delButtion);

    return holder;
  }
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
         this.previewName = 'placeholder graph';
         this.previewImage = 'http://Chartholdr.io/line/120/80';
      }

      _createClass(Graph, [{
         key: 'render',
         value: function render(_ref) {
            var env = _ref.env;
            var options = _ref.options;
            var payload = _ref.payload;

            _get(Object.getPrototypeOf(Graph.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });
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
define('mobiledoc-experiments/ghost-cards/index', ['exports', 'mobiledoc-experiments/ghost-cards/kitten', 'mobiledoc-experiments/ghost-cards/graph', 'mobiledoc-experiments/ghost-cards/slide-show', 'mobiledoc-experiments/ghost-cards/whakapapa-snow-report', 'mobiledoc-experiments/ghost-cards/a-league', 'mobiledoc-experiments/ghost-cards/related-posts', 'mobiledoc-experiments/ghost-cards/trello-card', 'mobiledoc-experiments/ghost-cards/soundcloud'], function (exports, _mobiledocExperimentsGhostCardsKitten, _mobiledocExperimentsGhostCardsGraph, _mobiledocExperimentsGhostCardsSlideShow, _mobiledocExperimentsGhostCardsWhakapapaSnowReport, _mobiledocExperimentsGhostCardsALeague, _mobiledocExperimentsGhostCardsRelatedPosts, _mobiledocExperimentsGhostCardsTrelloCard, _mobiledocExperimentsGhostCardsSoundcloud) {
	exports['default'] = [new _mobiledocExperimentsGhostCardsKitten['default'](), new _mobiledocExperimentsGhostCardsGraph['default'](), new _mobiledocExperimentsGhostCardsSlideShow['default'](), new _mobiledocExperimentsGhostCardsWhakapapaSnowReport['default'](), new _mobiledocExperimentsGhostCardsALeague['default'](), new _mobiledocExperimentsGhostCardsRelatedPosts['default'](),
	//new TrelloCard(),
	new _mobiledocExperimentsGhostCardsSoundcloud['default']()];
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
                     this.previewName = 'placeholder kitten';
                     this.previewImage = 'https://placekitten.com/120/80';
              }

              _createClass(Kitten, [{
                     key: 'render',
                     value: function render(_ref) {
                            var env = _ref.env;
                            var options = _ref.options;
                            var payload = _ref.payload;

                            _get(Object.getPrototypeOf(Kitten.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });

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
define('mobiledoc-experiments/ghost-cards/related-posts', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var RelatedPosts = (function (_Card) {
    _inherits(RelatedPosts, _Card);

    function RelatedPosts() {
      _classCallCheck(this, RelatedPosts);

      _get(Object.getPrototypeOf(RelatedPosts.prototype), 'constructor', this).call(this);
      this.name = 'related-posts';
      this.previewName = 'related posts';
      this.previewImage = 'data:image/png;base64,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';
      //this.resizeMode  = this.resizeModeEnum.full_width_only;
    }

    _createClass(RelatedPosts, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(RelatedPosts.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });

        env.postModel.renderNode.element.style.width = "480px";
        var holder = document.createElement("div");

        holder.innerHTML = '<script>!function(){"use strict";function a(a){var b,c=[];if(!a)return"";for(b in a)a.hasOwnProperty(b)&&(a[b]||a[b]===!1)&&c.push(b+"="+encodeURIComponent(a[b]));return c.length?"?"+c.join("&"):""}var b,c,d,e,f="https://dev.ghost.io/ghost/api/v0.1/";d={api:function(){var d,e=Array.prototype.slice.call(arguments),g=f;return d=e.pop(),d&&"object"!=typeof d&&(e.push(d),d={}),d=d||{},d.client_id=b,d.client_secret=c,e.length&&e.forEach(function(a){g+=a.replace(/^/|/$/g,"")+"/"}),g+a(d)}},e=function(a){b=a.clientId?a.clientId:"",c=a.clientSecret?a.clientSecret:"",f=a.url?a.url:f.match(/{{api-url}}/)?"":f},"undefined"!=typeof window&&(window.ghost=window.ghost||{},window.ghost.url=d,window.ghost.init=e),"undefined"!=typeof module&&(module.exports={url:d,init:e})}();</script><script>\n                    ghost.init({\n                      clientId: "ghost-frontend",\n                      clientSecret: "5785edad1ffc"\n                    });\n                  </script>';

        return holder;
      }
    }]);

    return RelatedPosts;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = RelatedPosts;
});
define("mobiledoc-experiments/ghost-cards/slide-show-image-slide", ["exports", "jquery"], function (exports, _jquery) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ImageSlide = (function () {
    function ImageSlide() {
      _classCallCheck(this, ImageSlide);

      this.cbs = [];
      this.isEditing = false;
      this.holder = document.createElement("div");

      this.img = document.createElement("img");
      this.caption = document.createElement("p");

      this.holder.className = "slideshow-slide-holder";
      this.holder.style.position = "absolute";
      this.img.style.position = this.caption.style.position = "absolute";
      this.holder.style.top = "0px";
      this.holder.style.width = this.img.style.width = this.caption.style.width = "100%";
      this.holder.style.height = "400px";

      this.caption.style.bottom = "0px";

      this.caption.style.padding = "10px";

      this.holder.appendChild(this.img);
      this.holder.appendChild(this.caption);
      this.caption.addEventListener("click", this.edit.bind(this));

      this.slide = null;
    }

    _createClass(ImageSlide, [{
      key: "edit",
      value: function edit(e) {
        var _this = this;

        if (this.slide.editable === false) return;
        var caption = document.createElement("textarea");
        caption.style.position = "absolute";
        caption.style.bottom = "0px";

        this.holder.appendChild(caption);
        caption.style.display = 'inline';
        caption.value = this.slide.content;
        caption.select();

        caption.addEventListener("keypress", function (e) {
          if (e.keyCode === 13) {
            _this.isEditing = false;
            caption.style.display = 'none';
            _this.slide.content = caption.value;
            _this.caption.innerHTML = caption.value;
            _this.holder.removeChild(caption);
          }
        });
        this.isEditing = true;
      }
    }, {
      key: "render",
      value: function render() {
        return this.holder;
      }
    }, {
      key: "save",
      value: function save() {}
    }, {
      key: "update",
      value: function update(slide) {
        this.slide = slide;
        this.caption.innerHTML = slide.content || "Click here to enter content!";
        this.img.src = slide.src;
      }
    }, {
      key: "_doUpdate",
      value: function _doUpdate() {
        this.cbs.forEach(function (cb) {
          return cb();
        });
      }
    }, {
      key: "onUpdate",
      value: function onUpdate(cb) {
        this.cbs.push(cb);
      }
    }, {
      key: "fadeOut",
      value: function fadeOut(cb) {
        var $holder = (0, _jquery["default"])(this.holder);
        var $image = (0, _jquery["default"])(this.img);
        var imageHeight = $image.height();
        var holderHeight = $holder.height();
        $holder.css("z-index", 0);
        $holder.fadeOut();
        $image.animate({

          top: -imageHeight
        }, 2000, function (_) {
          return cb ? cb() : null;
        });
      }
    }, {
      key: "fadeIn",
      value: function fadeIn(cb) {
        var $holder = (0, _jquery["default"])(this.holder);
        var $image = (0, _jquery["default"])(this.img);

        $holder.fadeIn();
        var imageHeight = $image.height();
        var holderHeight = $holder.height();

        $holder.css("z-index", 9999);
        $image.css("top", -(imageHeight / 2 - holderHeight / 2) + 'px');
      }
    }]);

    return ImageSlide;
  })();

  exports["default"] = ImageSlide;
});
define('mobiledoc-experiments/ghost-cards/slide-show', ['exports', 'mobiledoc-experiments/ghost-cards/card', 'jquery', 'mobiledoc-experiments/ghost-cards/slide-show-image-slide'], function (exports, _mobiledocExperimentsGhostCardsCard, _jquery, _mobiledocExperimentsGhostCardsSlideShowImageSlide) {
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
      this.previewName = 'image / slideshow';
      this.previewImage = '/assets/cards/picture-preview.png';
      //this.resizeMode  = this.resizeModeEnum.full_width_only;
    }

    _createClass(SlideShow, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(SlideShow.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });
        if (!payload.images) payload.images = [];
        var holder = document.createElement('div');
        var image = new _mobiledocExperimentsGhostCardsSlideShowImageSlide['default']();
        var activeImage = image;
        var image2 = new _mobiledocExperimentsGhostCardsSlideShowImageSlide['default']();
        var arrayPosition = 0;
        var timeoutCounter = undefined;
        holder.className = 'card-slideshow';
        holder.style.position = "relative";
        holder.appendChild(image.render());
        holder.appendChild(image2.render());

        image2.fadeOut();

        image.update({ src: "/assets/cards/picture-blank.png", content: "Drag an image here, drag additional images to create a slideshow.", editable: false });

        env.postModel.renderNode.element.style.border = "1px solid black";
        env.postModel.renderNode.element.style.height = '400px';
        env.postModel.renderNode.element.style.overflow = "hidden";
        env.postModel.renderNode.element.addEventListener("dragover", function (e) {

          e.preventDefault();
        }, false);
        env.postModel.renderNode.element.addEventListener("drop", function (e) {
          e.preventDefault();
          var file = e.dataTransfer.files[0];
          var reader = new FileReader();
          reader.onload = function (e) {
            var newSlide = { src: e.target.result, content: "" };
            payload.images.push(newSlide);

            arrayPosition = payload.images.length - 1;
            //doFade( true );
            toggleImage(newSlide);
          };

          reader.readAsDataURL(file);
        }, false);

        function doFade(force) {
          if (payload.images.length < 2 && !force) return;
          arrayPosition++;

          if (arrayPosition >= payload.images.length) arrayPosition = 0;

          toggleImage(payload.images[arrayPosition]);
        }

        function toggleImage(slide) {
          clearTimeout(timeoutCounter);
          timeoutCounter = setTimeout(doFade, 5000);

          if (activeImage.isEditing) return;

          if (activeImage === image) {
            image2.update(slide);
            image.fadeOut();
            image2.fadeIn();
            activeImage = image2;
          } else {
            image.update(slide);
            image2.fadeOut();
            image.fadeIn();
            activeImage = image;
          }
        }

        return holder;
      }
    }]);

    return SlideShow;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = SlideShow;
});
define('mobiledoc-experiments/ghost-cards/soundcloud', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var SoundCloud = (function (_Card) {
    _inherits(SoundCloud, _Card);

    function SoundCloud() {
      _classCallCheck(this, SoundCloud);

      _get(Object.getPrototypeOf(SoundCloud.prototype), 'constructor', this).call(this);
      this.name = 'sound-cloud';
      this.previewName = 'soundcloud player';
      this.previewImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJcAlwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgUDBAYBB//EAEQQAAEDAgMDBQoKCwEAAAAAAAABAhEDBAUGEhMhMRRRorHBFiJBVGFkcZGh0QcXJjJSdIGTsuEVJENigoOzwsPw8SP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QAOxEBAAEDAQIIDAUEAwAAAAAAAAECAxEEIXEFEhMxUmGhwRQVJCUyQVFicoGx0RYjNMLwQ5Gy4TM1Qv/aAAwDAQACEQMRAD8AvJPEPbEgJASAkBICQEgJASAkBICQEgJASAkBICQIk4SDADADADADADADADADADADADADADADADADADAiEgAAAAAAAAAAAAAAAAAAAAIySywSDBIMEgwSDBIMEgwSDBIMEgwSDBIMEgwSDBIMEgwSDBIMEgwhqJSagGoBqAagGoBqAagGoBqAagGoBqAagGoBqAagGoBqAjIZEgJASAkBICQEgJASEM9GzvK6TQtK9ROdtNVT1wbabNyr0aZn5S1V37VHpVRHzgrWV5QSa9pXpt5301RBVZuU+lTMfIov2q/RqifnDBJrbSQkkgJASAkBIEJMmRICQEgJASAknCCSBLTU2a1NDtmi6deldM80k4nGcbEcanjcXO11eFYPRscx2lJ67ZtS0Wt/6NTvXeQ61jS02tTTHPmMuDqdXVe0ldXNirGx2qJCQdtwBURdygUWM5ZtMQa6pRa23uOKPYkI5f3k/wBUoang+3e2xsl0dLwldsbKttP85nAXtrXsbl9vdM0VGcU50508hwLlqq3VNFUbXqbN2i9RFdHMwyYNhJCSQEgJAgZJAAAABsW9nWuLa5uKenZ2zUc9VXnWEgzotVV01VR6mm5ept100Tz1cywuMPo08Nweu1q7S6eqVJXcvfIWK7NNNq3VHPPOq29RXVevUzOymNn9ma/wVbjMV5ZYe1lNtJm0a1V3IkJu9amd3S8bU1W7ezG1qs63k9JRdu7czj6pU0nIb3p4btF6hEeQZ95E/wDaRHuulVNOacP+oOT2odLGNVR8MuRz6G58UOhOg5gAXeBQZvwhMQw91ak39ZoJqYv0k8KFHX6flbfGjnh0uDNXNi7xavRl84lF4cDzj12AkAAACMhJIMACQN/L9CndY3Z0KzUfTe/vmrwVIVew36WiK79NNXMqa6uq3pq6qZxMQtrCglPDMzsa2G05aicyNVxatU4t34/nPKjermb2lmfX3xDNdsnB8rpz3DE9bkM7kZs2N8NdqcajVbp+i1tWfLXEl80T+0tUx5ZXuU7k+brfxfdTU2R8HzvJcp+NEKcR5vx196/M54Vjd3OjrJGacO+p1Otp0ao8po3S5NM+RXPijvXxdc4AAeKkkD5hd5fxFcQumWtlVfSbVcjHRCRO6JPOV6S9NyqKadmXsLPCGni1RNdcROGheYde2MLd2tWki8HOTcv2mi5YuW/Tpwt2tTZvf8dUS1p8pqbiQEgQkywywSE4WeFYa6viFe1uaSo+nbvfpngumU60LNixxrk0VRzRKhqdTFNqm5ROyZiO3amlBO5B9zHC+T1aI7RxMaTjdfcx4/nCKPd71zZ2TbTN2EU6bEai2bXuhOLtLkVfYWqLcU6u3EeyJ7JULl6bmgu1TP8A6mO2Ge2pRZZtTnqVepy9pnRT+XqN8tVyr8zSbo7kq9OcHyp5bij7Wz2E1U/k2N8FFXlGr3VfXCytmfLHEF80p+1fyLVEeV1z1Qp3J832496VPojIVVvnP+ZCnjyGY6/3OhnzpE9X7V7cpGaMN+qVutpdr2aijdPc5lG3RXPijvXhcc8AAAPNKSBCrRp1qbqdVqPY5IVrklFQiaYmMSmmZpnjRsl82zbgrcJvG1LdF5LWnSn0HeFPcef1ulizXmnml67gvWzqaJpr9KPooZKWHUwSMGGMllh61Ee9rFWEc5EVeaVGM7GNUzTGX0a1tqXdtfJuhbJqx6YTqRDu0UR4XVueTuXKvF1HxT9+9TNosX4PlSeNzx/jjqKnEidDjr78OhNdXjX5d2V/dU2Nzfhjk48kqJHo/wCl2uI8Ko3S5luqZ0F2Pehgt0bsM0p4NpU/pIY04xe3z9GyvPG0u6P8nj0b+h8qyu7bW8fdKR/Ssb4+kpjPhGq3Vf5Q37WO62/5+SUfxON9H6mrdHerXP0Fv4qvpCpfp7iK2/dt3b/5xVnHgk7+9ejPjKN37VveR3UYbHi1frYWbn6ijdPcoWv0VzfT3rotqAAAAAAHMZ/Rq4Aqr85tZmn29klDhKPyPnDrcCTPheI9kvm5wXr8AMIySyw8XeipzkTCYdXhGM8pzHfXrkVqPs37l8Glqe46Vm/xr9VfthwtVo+T0lFqNuKo7Zlqcp05BWmq7+XaejqNPH8ix1/7b+S86Z93vw6G7utWeMHai7ltPxI5exC9XXPhdvd9c/ZyrVrHBt6fe+mPu1ba5/U83rP7SoqdJE6jXTVmi/8ANuuW/wAzSbo+6Va404RlFPOKXsTT2iap5Kxvgot51Gr3Vfda2tX5a4i3ms2exfzLVFXlVcdUKNyjzdbn3p/nYolr6vg9qunet1u+9RSnxvIZnr73SijHC0R7v7XQVqmrNuGJ5jVX1q33F2r9RTuly6KcaC78Ud7oS45gAAAAPFWAPnefcZp3lenYWz0dToOV1RycFfwj7Di8IX4rmKKfU9VwLoqrVM3q42zzbv8Abk5Oa7uCQYY9RLLBqGDCTajmKqscrVVFRYWNy8UJ2xzImmJ52Rbp/IeRymx2u1iN+rTp6jLjTxOJ6udhyNPK8r68Y7ct5ccrritpiOhm1tmMY1s7nI1I3+mVNvL1cpFzG2MdirGgoixXZzsqmZ/uxUsXr06WI00YxUv99RZXve+Vd3rMYu1RFcdJnVo6KqrdXQ5uvZhKpjNxUtcOt9LEbYP10neFVmUn1Ezeqmmmnoop0VEV3K+nGJbTMz3bMXucTbSp7WvT2as3wibo6kM41VcXJuY2zsaZ4LtzYpsTM4ictJuK1m4IuEw1aO1SprX53oNfKzyPJepY8EpnU+EevGG8uaL39JW18jKO0oUNijVRYcnhk2+F3OUi5jbEYVvFVrkarOZxM5WPd/iPitr0veb/ABlc9kKv4fsdKTu/xHxW16XvHjK50YPw/Y6U9h8YGI+K2vS95HjK50YPw/Y6U9j34wMR8VtekPGV32QeILHSnsPjAxHxS16RPjK57IPEFjpT2K/Es3Ytf01pLVbQpO3K2i2FX7eJoua29cjHNHUs6fgjTWZ42Mz1qFFgqOpg1AwagYRkyZEgJASAkBICQEgJASAkBICQEgJASAkBICQIkpAAAAAAAAAAAAAAAAAAAAARkMsEgwSDBIMEgwSDBIMEgwSDBIMEgwSDBIMEgwSDBIMEgwSDBIMIySkkBICQEgJASAkBICQEgJASAkBICQEgJASBEySAAAAAAAAAAAAAAAAAAAAAiEgAAAAAAAAAAAAAAAAAAAAP/9k=';
    }

    _createClass(SoundCloud, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        options.onEdit = function () {
          doEdit();
        };
        _get(Object.getPrototypeOf(SoundCloud.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });

        var holder = document.createElement("div");
        holder.className = "card-soundcloud";

        function doEdit() {
          var label = document.createElement("label");
          var input = document.createElement("input");

          input.addEventListener("keyup", function (e) {

            if (e.keyCode === 13) {
              payload.url = encodeURI(input.value);
              doRender();
            }
          });

          input.value = payload.url || "https://api.soundcloud.com/tracks/2";
          label.appendChild(document.createTextNode("Paste the URL to the soundcloud file: "));
          label.appendChild(input);
          holder.innerHTML = "";
          holder.appendChild(label);
        }

        function doRender() {
          holder.innerHTML = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=' + payload.url + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
        }

        if (!payload.url) {
          doEdit();
        } else {
          doRender();
        }

        return holder;
      }
    }]);

    return SoundCloud;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = SoundCloud;
});
define('mobiledoc-experiments/ghost-cards/trello-card', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TrelloCard = (function (_Card) {
    _inherits(TrelloCard, _Card);

    function TrelloCard() {
      _classCallCheck(this, TrelloCard);

      _get(Object.getPrototypeOf(TrelloCard.prototype), 'constructor', this).call(this);
      this.name = 'trello-card';
      this.previewName = 'trello task';
      this.previewImage = 'https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/c13d1cd96a2cff30f0460a5e1860c5ea/header-logo-blue.svg';
      //this.resizeMode  = this.resizeModeEnum.full_width_only;
    }

    _createClass(TrelloCard, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(TrelloCard.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });

        env.postModel.renderNode.element.style.width = "480px";
        var holder = document.createElement("div");

        holder.innerHTML = '<script>!function(){"use strict";function a(a){var b,c=[];if(!a)return"";for(b in a)a.hasOwnProperty(b)&&(a[b]||a[b]===!1)&&c.push(b+"="+encodeURIComponent(a[b]));return c.length?"?"+c.join("&"):""}var b,c,d,e,f="https://dev.ghost.io/ghost/api/v0.1/";d={api:function(){var d,e=Array.prototype.slice.call(arguments),g=f;return d=e.pop(),d&&"object"!=typeof d&&(e.push(d),d={}),d=d||{},d.client_id=b,d.client_secret=c,e.length&&e.forEach(function(a){g+=a.replace(/^/|/$/g,"")+"/"}),g+a(d)}},e=function(a){b=a.clientId?a.clientId:"",c=a.clientSecret?a.clientSecret:"",f=a.url?a.url:f.match(/{{api-url}}/)?"":f},"undefined"!=typeof window&&(window.ghost=window.ghost||{},window.ghost.url=d,window.ghost.init=e),"undefined"!=typeof module&&(module.exports={url:d,init:e})}();</script><script>\n                    ghost.init({\n                      clientId: "ghost-frontend",\n                      clientSecret: "5785edad1ffc"\n                    });\n                  </script>';

        return holder;
      }
    }]);

    return TrelloCard;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = TrelloCard;
});
define('mobiledoc-experiments/ghost-cards/whakapapa-snow-report', ['exports', 'mobiledoc-experiments/ghost-cards/card'], function (exports, _mobiledocExperimentsGhostCardsCard) {
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var WhakapapaSnowReport = (function (_Card) {
    _inherits(WhakapapaSnowReport, _Card);

    function WhakapapaSnowReport() {
      _classCallCheck(this, WhakapapaSnowReport);

      _get(Object.getPrototypeOf(WhakapapaSnowReport.prototype), 'constructor', this).call(this);
      this.name = 'whakapapa-snow-report';
      this.previewName = 'whakapapa forecast';
      this.previewImage = 'http://www.mtruapehu.com/content/plugins/tradegallery/thumbnail/1U0A2931.jpg';
      //this.resizeMode  = this.resizeModeEnum.full_width_only;
    }

    _createClass(WhakapapaSnowReport, [{
      key: 'render',
      value: function render(_ref) {
        var env = _ref.env;
        var options = _ref.options;
        var payload = _ref.payload;

        _get(Object.getPrototypeOf(WhakapapaSnowReport.prototype), 'render', this).call(this, { env: env, options: options, payload: payload });

        env.postModel.renderNode.element.style.width = "480px";
        var holder = document.createElement("div");

        holder.innerHTML = '<link href="//www.snow-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" /><div id="wf-weatherfeed"><iframe style="overflow:hidden;border:none;" allowtransparency="true" height="272" width="469" src="//www.snow-forecast.com/resorts/Whakapapa/forecasts/feed/top/m" scrolling="no" frameborder="0" marginwidth="0" marginheight="0"><p>Your browser does not support iframes.</p></iframe><div id="wf-link"><a href="http://www.snow-forecast.com/"><img alt="Snow Forecast" src="//www.snow-forecast.com/images/feed/snowlogo-150.png"/></a><p id="cmt">View detailed snow forecast for <a href="http://www.snow-forecast.com/resorts/Whakapapa/6day/mid">Whakapapa</a> at:<br /><a href="http://www.snow-forecast.com/"><strong>snow-forecast.com</strong></a></p><div style="clear: both;"></div></div></div>';

        return holder;
      }
    }]);

    return WhakapapaSnowReport;
  })(_mobiledocExperimentsGhostCardsCard['default']);

  exports['default'] = WhakapapaSnowReport;
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
          if (commentOffset === undefined || commentOffset === null) {
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

            if (mouseX < 100 && window.dragel.card.resizeMode != "full_width_only") {
              pos = "left";
            } else if (mouseX > offset.width - 100 && window.dragel.card.resizeMode != "full_width_only") {
              pos = "right";
            } else if (mouseY > offset.height / 2) {
              pos = "bottom";
            } else {
              pos = "top";
            }
            if (pos === "bottom") {
              //placing on the bottom is simply placing at the top of the next section
              pos = "top";
              var card = postEditor.builder.createCardSection(window.dragel.card.name || "kitten", { pos: pos });
              postEditor.insertSectionBefore(env.editor.post.sections, card, env.section.next);
            } else {
              var section = env.section;
              //if it's going to the top and isn't floated then put it at the top.

              while (section.prev.type === 'card-section' && (section.prev.payload.pos === "left" || section.prev.payload.pos === "right")) {
                section = env.section.prev;
              }
              var card = postEditor.builder.createCardSection(window.dragel.card.name || "kitten", { pos: pos });
              postEditor.insertSectionBefore(env.editor.post.sections, card, section);
            }
          });
          event.target.className = '';
        });
        env.element.addEventListener("dragenter", function (event) {});

        env.element.addEventListener("dragover", function (event) {

          var offset = env.element.getBoundingClientRect(); //event.srcElement.getBoundingClientRect();
          var mouseX = event.pageX - offset.left;
          var mouseY = event.pageY - offset.top;

          if (mouseX < 100 && window.dragel.card.resizeMode != "full_width_only") {
            env.element.className = 'dropper-left';
          } else if (mouseX > offset.width - 100 && window.dragel.card.resizeMode != "full_width_only") {
            env.element.className = 'dropper-right';
          } else if (mouseY > offset.height / 2) {
            env.element.className = 'dropper-bottom';
          } else {
            env.element.className = 'dropper-top';
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
define("mobiledoc-experiments/templates/components/card-picker-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 136
          }
        },
        "moduleName": "mobiledoc-experiments/templates/components/card-picker-card.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "card-drop");
        dom.setAttribute(el1, "draggable", "true");
        var el2 = dom.createElement("label");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [0]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "style", ["concat", ["background-image: url('", ["get", "card.previewImage", ["loc", [null, [1, 72], [1, 89]]]], "')"]]], ["content", "card.previewName", ["loc", [null, [1, 102], [1, 122]]]]],
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
              "line": 3,
              "column": 1
            },
            "end": {
              "line": 5,
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
        statements: [["inline", "card-picker-card", [], ["card", ["subexpr", "@mut", [["get", "card", ["loc", [null, [4, 26], [4, 30]]]]], [], []]], ["loc", [null, [4, 2], [4, 32]]]]],
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
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]], ["block", "each", [["get", "cards", ["loc", [null, [3, 9], [3, 14]]]]], [], 0, null, ["loc", [null, [3, 1], [5, 10]]]]],
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
  require("mobiledoc-experiments/app")["default"].create({"name":"mobiledoc-experiments","version":"0.0.0+a87f0c47"});
}

/* jshint ignore:end */
//# sourceMappingURL=mobiledoc-experiments.map