
export default class Section {
  constructor( ) {
    this.tagName = "p";
  }

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
        
        if( mouseX < 33 && window.dragel.card.resizeMode != "full_width_only" ) {
          pos = "left";
        } else if( mouseX > offset.width-33 && window.dragel.card.resizeMode != "full_width_only"){
          pos = "right";
        } else if( mouseY > offset.height / 2 ) {
          pos = "bottom";
        } else {
          pos = "top";
        }
        if( pos === "bottom" ) {
          //placing on the bottom is simply placing at the top of the next section
          pos = "top";
          let card = postEditor.builder.createCardSection(window.dragel.card.name || "kitten", { pos });
          postEditor.insertSectionBefore(env.editor.post.sections, card, env.section.next);
        } else {
          let card = postEditor.builder.createCardSection(window.dragel.card.name || "kitten", { pos } );
          postEditor.insertSectionBefore(env.editor.post.sections, card, env.section);
        }
      } );
      event.target.className='';
    });
    env.element.addEventListener("dragenter" , event => {
      

    });


   env.element.addEventListener("dragover", function( event ) {
    
        let offset = env.element.getBoundingClientRect();//event.srcElement.getBoundingClientRect();
        let mouseX = event.pageX - offset.left;
        let mouseY = event.pageY - offset.top;
        
        if( mouseX < 33 && window.dragel.card.resizeMode != "full_width_only" ) {
          env.element.className='dropper-left';
        } else if( mouseX > offset.width-33  && window.dragel.card.resizeMode != "full_width_only" ){
          env.element.className='dropper-right';
        } else if( mouseY > offset.height / 2 ) {
          env.element.className='dropper-bottom';
        } else {
         env.element.className='dropper-top';
        }

        event.preventDefault();
    }, false);

    env.element.addEventListener("dragleave" , event => {
      event.target.className='';
    });
  }
  //onDelete : _ => alert("DID DELETE")
}