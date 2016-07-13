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
  tagName : "p",
  //onCreate : _ => alert("CREATE"),
    render(env) {
    env.element.addEventListener("mouseenter", event => {
        
      } );

    env.element.addEventListener("mouseleave" , event => {
        event.target.className='';
    });
    env.element.addEventListener("drop" , event => {
      env.editor.run( postEditor =>   {
        let offset = event.srcElement.getBoundingClientRect();
        let mouseX = event.pageX - offset.left;
        let mouseY = event.pageY - offset.top;
        let pos = "top";
        
        if( mouseX < 33 ) {
          pos = "left";
        } else if( mouseX > offset.width-33 ){
          pos = "right";
        } else if( mouseY > offset.height / 2 ) {
          pos = "bottom";
        } else {
          pos = "top";
        }
        if( pos === "bottom" ) {
          pos = "top";
          console.log("INSERTING AT BOTTOM");
          let card = postEditor.builder.createCardSection("testCard", { pos });
          postEditor.insertSectionBefore(env.editor.post.sections, card, env.section.next);
        } else {
          console.log("INSERTING AT TOP");
          let card = postEditor.builder.createCardSection("testCard", { pos } );
          postEditor.insertSectionBefore(env.editor.post.sections, card, env.section);
        }
      } );
      event.target.className='';
    });
    env.element.addEventListener("dragenter" , event => {
      

    });


   env.element.addEventListener("dragover", function( event ) {
        let offset = event.srcElement.getBoundingClientRect();
        let mouseX = event.pageX - offset.left;
        let mouseY = event.pageY - offset.top;
        
        if( mouseX < 33 ) {
          event.srcElement.className='dropper-left';
        } else if( mouseX > offset.width-33 ){
          event.srcElement.className='dropper-right';
        } else if( mouseY > offset.height / 2 ) {
          event.srcElement.className='dropper-bottom';
        } else {
         event.srcElement.className='dropper-top';
        }

        event.preventDefault();
    }, false);

    env.element.addEventListener("dragleave" , event => {
      event.target.className='';
    });
  }
  //onDelete : _ => alert("DID DELETE")
}


let markup = {
  tagName : "mark",
  //onCreate : _ => alert("CREATE"),
  render(env) {
    env.element.addEventListener("mouseenter", event => {
        event.target.style="background-color:red;";
      } );

    env.element.addEventListener("mouseleave" , event => {
        event.target.style="";
    });

  }
  //onDelete : _ => alert("DID DELETE")
}

let testCard = {
 name: 'testCard',
 type: 'dom',
 render({env, options, payload}) {
   switch( payload.pos ) {
    case "left":
     env.postModel.renderNode.element.className = "card-left"
    break;
    case "right":
    env.postModel.renderNode.element.className = "card-right"
    break;
    default:
    env.postModel.renderNode.element.className = "card"

   }
   
   let test = document.createElement('div');
   test.className = "test";
   return test;
 }
};



export default Ember.Component.extend({
	didRender( ) {
		var options = { mobiledoc: simpleMobiledoc , sections : [ section ] ,  cards : [testCard] , markups : [markup] };
		var editor = new Mobiledoc.Editor(options);
		
    this.$('#h1')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleSection('h1');});
    this.$('#card')[0].onclick = _ => editor.insertCard("testCard");
    this.$('#b')[0].onclick = _ => editor.run( postEditor =>   {
      console.log(postEditor);
      let card = postEditor.builder.createCardSection("testCard");
      postEditor.insertSectionBefore(editor.post.sections, card, editor.range.tail.section);
      //postEditor.insertMarkers(editor.range.head, [card]);
    } ); //editor.run( postEditor => console.log( postEditor , editor ) );//editor.run(postEditor => {postEditor.toggleMarkup('strong');});
    this.$('#i')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('em');});
    this.$('#comment')[0].onclick = _ => editor.run(postEditor => {postEditor.toggleMarkup('mark');});

		editor.render(this.$('.body')[0]);
		


	}
});
