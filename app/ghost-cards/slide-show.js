import Card from './card';
import $ from 'jquery';
import ImageSlide from './slide-show-image-slide';


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
    let image = new ImageSlide( );
    let activeImage = image;
    let image2 = new ImageSlide( );
    let arrayPosition = 0;
    let timeoutCounter;
    holder.className='card-slideshow';
    holder.style.position ="relative";
    holder.appendChild( image.render() );
    holder.appendChild( image2.render() );

    image2.fadeOut();

    image.update({ src : "/assets/cards/picture-blank.png" , content : "Drag an image here, drag additional images to create a slideshow." , editable : false });



    env.postModel.renderNode.element.style.border = "1px solid black";
    env.postModel.renderNode.element.style.height='400px';
    env.postModel.renderNode.element.style.overflow="hidden";
    env.postModel.renderNode.element.addEventListener("dragover",  e => {
        
        e.preventDefault();
      }, false);
     env.postModel.renderNode.element.addEventListener("drop",  e => {
        e.preventDefault();
        let file = e.dataTransfer.files[ 0 ];
        let reader = new FileReader();
        reader.onload = function( e ) {
          let newSlide = { src : e.target.result , content : "" };
          payload.images.push( newSlide );
          
          arrayPosition = payload.images.length - 1;
          //doFade( true );
          toggleImage( newSlide );
          
         };

         reader.readAsDataURL( file );
       
     } , false );


      function doFade( force ) {
        if( payload.images.length < 2 && !force ) return;
        arrayPosition++;
        
        if( arrayPosition >= payload.images.length ) arrayPosition = 0;

        toggleImage( payload.images[ arrayPosition ] );

      }

     

     function toggleImage( slide ) {
      clearTimeout( timeoutCounter );
      timeoutCounter = setTimeout( doFade , 5000 );
      
      if( activeImage.isEditing ) return;
      
      if( activeImage === image ) {
        image2.update( slide );
        image.fadeOut( );
        image2.fadeIn( );
        activeImage = image2;
      } else {
        image.update( slide );
        image2.fadeOut( );
        image.fadeIn( );
        activeImage = image;
      }
 
     }



    return holder;
  } 

}
