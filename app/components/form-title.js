import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';
//import cards from '../cards/index.js';

let simpleMobiledoc = {
  version: "0.3.0",
  markups: [],
  atoms: [],
  cards: [],
  sections: [
    [1, "h2", [
      [0, [], 0, "Ghost Blog"]
    ]]
  ]
};




export default Ember.Component.extend({
	didRender( ) {
		var options = { mobiledoc: simpleMobiledoc };
		var editor = new Mobiledoc.Editor(options);
		
		editor.render(this.$('.title')[0]);
		
	}
});
