import Ember from 'ember';
import Mobiledoc from 'mobiledoc-kit';

import cards from '../ghost-cards';
import atoms from '../ghost-atoms';
import sections from '../ghost-sections';
import markups from '../ghost-markups';



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




let mobiledocsimple = {
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


let mobiledoc = {"version":"0.3.0","atoms":[],"cards":[["slide-show",{"pos":"top","images":[
{"src":"/assets/cards/slideshow-phoenix1.png","content":"Key signing: Argentinian playmaker Gui Finkler should be able to create goal scoring oportunities."},
{"src":"/assets/cards/slideshow-phoenix2.png","content":"Big money deal: Home coming for NZ international Kosta Barbourouses."},
{"src":"/assets/cards/slideshow-phoenix3.png","content":"Last chance saloon: Ernie Merick is a proven winner but this year he has to take Wellington to the championship."},
{"src":"/assets/cards/slideshow-phoenix4.png","content":"Must improve: NZ International Michael McGlinchey needs to reclaim championship winning form."},
{"src":"/assets/cards/slideshow-phoenix1.png","content":"Key signing: Argentinian playmaker Gui Finkler should be able to create goal scoring oportunities."},
{"src":"/assets/cards/slideshow-phoenix2.png","content":"Big money deal: Home coming for NZ international Kosta Barbourouses."},
{"src":"/assets/cards/slideshow-phoenix3.png","content":"Last chance saloon: Ernie Merick is a proven winner but this year he has to take Wellington to the championship."},
{"src":"/assets/cards/slideshow-phoenix4.png","content":"Must improve: NZ International Michael McGlinchey needs to reclaim championship winning form."},
{"src":"/assets/cards/slideshow-phoenix1.png","content":"Key signing: Argentinian playmaker Gui Finkler should be able to create goal scoring oportunities."},
{"src":"/assets/cards/slideshow-phoenix2.png","content":"Big money deal: Home coming for NZ international Kosta Barbourouses."},
{"src":"/assets/cards/slideshow-phoenix3.png","content":"Last chance saloon: Ernie Merick is a proven winner but this year he has to take Wellington to the championship."},
{"src":"/assets/cards/slideshow-phoenix4.png","content":"Must improve: NZ International Michael McGlinchey needs to reclaim championship winning form."},
{"src":"/assets/cards/slideshow-phoenix1.png","content":"Key signing: Argentinian playmaker Gui Finkler should be able to create goal scoring oportunities."},
{"src":"/assets/cards/slideshow-phoenix2.png","content":"Big money deal: Home coming for NZ international Kosta Barbourouses."},
{"src":"/assets/cards/slideshow-phoenix3.png","content":"Last chance saloon: Ernie Merick is a proven winner but this year he has to take Wellington to the championship."},
{"src":"/assets/cards/slideshow-phoenix4.png","content":"Must improve: NZ International Michael McGlinchey needs to reclaim championship winning form."}
]}],["sound-cloud",{"pos":"left","url":"https://soundcloud.com/piney6/interview-with-kosta-barbarouses"}],["a-league",{"pos":"right"}],["graph",{"pos":"right"}],["kitten",{"pos":"left"}],["whakapapa-snow-report",{"pos":"left"}]],"markups":[],"sections":[[1,"h1",[[0,[],0,"Big season looming for Wellington."]]],[1,"p",[[0,[],0,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia."]]],[10,0],[1,"p",[]],[1,"p",[[0,[],0,"It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."]]],[1,"p",[[0,[],0,"The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then"]]],[10,1],[1,"p",[[0,[],0,"But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."]]],[1,"p",[[0,[],0,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way."]]],[10,2],[1,"p",[[0,[],0,"On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."]]],[1,"p",[[0,[],0,"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."]]],[1,"h2",[[0,[],0,"Research shows that the more games you win the more likely you are win the championship."]]],[10,3],[1,"p",[[0,[],0,"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country."]]],[1,"p",[[0,[],0,"But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."]]],[1,"p",[[0,[],0,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy."]]],[1,"p",[[0,[],0,"The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."]]],[1,"p",[[0,[],0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way."]]],[1,"h2",[[0,[],0,"Even professional athletes like kittens:"]]],[10,4],[1,"p",[[0,[],0,"When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again."]]],[1,"p",[[0,[],0,"And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen."]]],[1,"p",[[0,[],0,"She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country."]]],[1,"p",[[0,[],0,"But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."]]],[1,"p",[[0,[],0,"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy."]]],[1,"p",[[0,[],0,"The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."]]],[1,"h2",[[0,[],0,"Completely unrelated content: Ski Field forecast, maybe footballers are going skiing in the offseason?"]]],[10,5],[1,"p",[[0,[],0,"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane."]]],[1,"p",[[0,[],0,"Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."]]]]};


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
