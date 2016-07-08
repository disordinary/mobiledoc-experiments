import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';

//import cards from '../cards/index.js';

let simpleMobiledoc = {
  version: "0.3.0",
  markups: [],
  atoms: [],
  cards: [],
  sections: [
    [1, "h1", [
      [0, [], 0, "Title"]
    ]],
    [1, "p", [
      [0, [], 0, "Body"]
    ]]
  ]
};

let section = {
  tagName : "h1",
  //onCreate : _ => alert("CREATE"),
  onBeforeDelete : ( ) => { return true; },
  //onDelete : _ => alert("DID DELETE")
}



export default Ember.Component.extend({
	didRender( ) {
		var options = { mobiledoc: simpleMobiledoc , sections : [ section ] };
		var editor = new Mobiledoc.Editor(options);
		
    this.$('#h1')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h1');});

		editor.render(this.$('.body')[0]);
		
	}
});
