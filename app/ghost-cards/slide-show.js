import Card from './card';
import $ from 'jquery';

export default class SlideShow extends Card {
  constructor( ) {
    super();
    this.name = 'slide-show';

  }

  render( { env , options , payload } ) {
     super.doFloat( env ,payload ); 
     if( !payload.images ) payload.images = [ ];
      let holder = document.createElement('div');
     let img = document.createElement("img");
     let img2 = document.createElement("img");
     img.style.width="100%";
     img2.style.width="100%";
     img.style.position = "absolute";
     img2.style.position = "absolute";
     holder.style.position="relative";
     
     env.postModel.renderNode.element.style.border = "1px solid black";
     env.postModel.renderNode.element.style.width='400px';
     env.postModel.renderNode.element.style.height='400px';
     env.postModel.renderNode.element.style.overflow="hidden";
     env.postModel.renderNode.element.addEventListener("dragover", function (e) {
        console.log("DRAGGING OVER");
        e.preventDefault();
      }, false);
     env.postModel.renderNode.element.addEventListener("drop", function( e ) {
        e.preventDefault();
        let file = e.dataTransfer.files[ 0 ];
        let reader = new FileReader();
        reader.onload = function( e ) {
          
          payload.images.push( e.target.result );
          
          img.src = e.target.result;
         };

         reader.readAsDataURL( file );
       
     } , false );


     let arrayCursor =0;
     setInterval( _ => {
      if( arrayCursor & 1 ) {
        img.src = payload.images[ arrayCursor ]; 
        $(img).fadeIn();
        $(img2).fadeOut(); 
      } else {
        img2.src = payload.images[ arrayCursor ];
        $(img2).fadeIn();
        $(img).fadeOut();
      }
      
      arrayCursor++;
      if( arrayCursor >= payload.images.length ) {
        arrayCursor = 0;
      }
     }, 2000);
     holder.appendChild( img );
     holder.appendChild( img2 );
     return holder;
  }

}