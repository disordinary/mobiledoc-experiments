import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';

import cards from '../ghost-cards';
import atoms from '../ghost-atoms';
import sections from '../ghost-sections';
import markups from '../ghost-markups';

let something = "SOMETHING";

let emptymobiledoc = {
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




let mobiledoc = {
  "version":"0.3.0",
  "atoms":[],
  "cards":[
      ["slide-show",{"pos":"top","images":[
          {"src":"/assets/cards/slideshow-phoenix1.png","content":"Key signing: Argentinian playmaker Gui Finkler should be able to create goal scoring oportunities."},
          {"src":"/assets/cards/slideshow-phoenix2.png","content":"Big money deal: Home coming for NZ international Kosta Barbourouses."},
          {"src":"/assets/cards/slideshow-phoenix3.png","content":"Last chance saloon: Ernie Merick is a proven winner but this year he has to take Wellington to the championship."},
          {"src":"/assets/cards/slideshow-phoenix4.png","content":"Must improve: NZ International Michael McGlinchey needs to reclaim championship winning form."}
          ]}
      ]],"markups":[],"sections":[[1,"h1",[[0,[],0,"Title"]]],[1,"p",[[0,[],0,"Body"]]],[10,0],[1,"p",[[0,[],0,"sdfsdfsdfd"]]]]};





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
	
    this.$('#h2')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h2');});
    this.$('#h3')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h3');});
    this.$('#b')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('strong');});
    this.$('#i')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('em');});
    this.$('#ol')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('ol');});
    this.$('#ul')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('ul');});
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
