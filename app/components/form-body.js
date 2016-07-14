import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';

import cards from '../ghost-cards';
import atoms from '../ghost-atoms';
import sections from '../ghost-sections';
import markups from '../ghost-markups';



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


class Comment {
  constructor( user , comment ) {
    this.user = user;
    this.comment = comment;
  }
}

export default Ember.Component.extend({
	didRender( ) {
		var options = { mobiledoc: simpleMobiledoc , sections ,  cards  , markups };
		var editor = new Mobiledoc.Editor(options);

    editor.comments = [ ];
	
    this.$('#h1')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h1');});
    this.$('#b')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('strong');});
    this.$('#i')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('em');});
    this.$('#comment')[0].onclick = _ => editor.run(postEditor => {
      postEditor.toggleMarkup(editor.builder.createMarkup("mark" , {href : editor.comments.push( new Comment(  0 , "" ) )})); //temporary solution as href is the only allowed attribute right now.
    });




		editor.render(this.$('.body')[0]);
		


	}
});
