import Card from './card';
import $ from 'jquery';

export default class SlideShow extends Card {
  constructor( ) {
    super();
    this.name = 'slide-show';
    this.previewName = 'image / slideshow';
    this.previewImage = '/assets/cards/picture-preview.png';
    this.resizeMode  = this.resizeModeEnum.full_width_only;
  }

  render( { env , options , payload } ) {
     super.doFloat( env ,payload ); 
     if( !payload.images ) payload.images = [ ];
      let holder = document.createElement('div');
      holder.className='card-slideshow';
     let img = document.createElement("img");
     let img2 = document.createElement("img");
     img.style.width="100%";
     img2.style.width="100%";
     img.style.position = "absolute";
     img2.style.position = "absolute";

     let label = document.createElement("p");
     label.innerHTML = "PLACEHOLDER TEXT - DRAG AN IMAGE INTO THIS CONTAINER FOR A PICTURE, DRAG ADDITIONAL IMAGES TO CREATE A SLIDESHOW.";
     

      if( !payload.images.length ) img.src="/assets/cards/picture-blank.png"


     holder.style.position="relative";

    console.log( env.postModel.renderNode.element );     
     
     env.postModel.renderNode.element.style.border = "1px solid black";
     env.postModel.renderNode.element.style.height='400px';
     env.postModel.renderNode.element.style.overflow="hidden";
     env.postModel.renderNode.element.addEventListener("dragover", function (e) {
        
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
     let currentImage;
     setInterval( _ => {
      if( !payload.images.length ) return;
      if( currentImage == img2 ) {
        img.src = payload.images[ arrayCursor ]; 
        $(img).fadeIn();
        $(img2).fadeOut(); 
        currentImage = img;
      } else {
        img2.src = payload.images[ arrayCursor ];
        $(img2).fadeIn();
        $(img).fadeOut();
        currentImage = img2;
      }
      
      arrayCursor++;
      if( arrayCursor >= payload.images.length ) {
        arrayCursor = 0;
      }
     }, 2000);
     holder.appendChild( img );
     holder.appendChild( img2 );
     holder.appendChild( label )
     return holder;
  }

}