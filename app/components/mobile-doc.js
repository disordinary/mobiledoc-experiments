import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';
import cards from 'mobiledoc-experiments/cards/index.js';

let simpleMobiledoc = {
  version: "0.3.0",
  markups: [],
  atoms: [],
  cards: [],
  sections: [
    [1, "p", [
      [0, [], 0, "Welcome to Mobiledoc"]
    ]]
  ]
};




export default Ember.Component.extend({
	didRender( ) {
		var options = { mobiledoc: simpleMobiledoc };
		var editor = new Mobiledoc.Editor(options);

		editor.render(document.getElementById('editor'));
	}
});
