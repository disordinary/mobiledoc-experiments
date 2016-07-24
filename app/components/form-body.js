import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';

import cards from '../ghost-cards';
import atoms from '../ghost-atoms';
import sections from '../ghost-sections';
import markups from '../ghost-markups';

let something = "SOMETHING";

let mobiledoc = {
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


class Comment {
  constructor( user , comment ) {
    this.user = user;
    this.comment = comment;
    this._dom = null;
  }
}



export default Ember.Component.extend({
  cards : cards,
	didRender( ) {
		var options = { mobiledoc , sections ,  cards  , markups ,  atoms };
		var editor = new Mobiledoc.Editor(options);

    editor.comments = [ ];
	
    this.$('#h1')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h1');});
    this.$('#b')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('strong');});
    this.$('#i')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('em');});
    this.$('#comment')[0].onclick = _ => editor.run(postEditor => {
      let mark = editor.builder.createMarkup("mark" , {"data-comment-id" : editor.comments.push( new Comment(  0 , "" ) )});
      //postEditor.toggleMarkup(mark); //temporary solution as href is the only allowed attribute right now.
      postEditor.addMarkupToRange( postEditor._range , mark );
      /*let atom;
      let { range } = ed;
      ed.run(postEditor => {
        let position = range.head;
        position.offset++;
        atom = postEditor.builder.createAtom("comment", "", {});
        postEditor.insertMarkers(position, [atom]);
    });*/


    });




		editor.render(this.$('.body')[0]);
		
    window.editor = editor; //make editor a global so that I can inspect it's state with the console.

	}
});
