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
   
     let currentImage;

    let arrayCursor = 0;
    let isEditing = false;
    let holder = document.createElement('div');
    
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    let label = document.createElement("p");
    let caption = document.createElement("textarea");
 
    holder.className='card-slideshow';
    img.style.width="100%";
    img2.style.width="100%";
    img.style.position = "absolute";
    img2.style.position = "absolute";

    
    label.innerHTML = "PLACEHOLDER TEXT - DRAG AN IMAGE INTO THIS CONTAINER FOR A PICTURE, DRAG ADDITIONAL IMAGES TO CREATE A SLIDESHOW.";
    label.addEventListener("click" , e => {
         caption.style.display = 'inline';
         caption.value = label.innerHTML;
         caption.select();
         isEditing = true;
    });

    caption.innerHTML = "ENTER IN TEXT";
    caption.addEventListener("keypress" , e => {
      if( e.keyCode === 13 ) {
        isEditing = false;
        caption.style.display = 'none';
        payload.images[ arrayCursor ].content = caption.value;
        label.innerHTML = caption.value;
        fadeImage();
      }
    })

    caption.style.display = 'none';


    if( !payload.images.length ) img.src="/assets/cards/picture-blank.png"


     holder.style.position="relative";

    
     
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
          
          payload.images.push( { src : e.target.result , content : "" } );
          fadeImage( payload.images.length );
          
         };

         reader.readAsDataURL( file );
       
     } , false );



     


     function fadeImage( newArrayCursor ) {
        function doSetTimeOut( ) {
          setTimeout( fadeImage , 2000 );
        }
   
          if( (payload.images.length <= 1  || isEditing) && !newArrayCursor ) return;
          
          arrayCursor = newArrayCursor || arrayCursor + 1;

          label.innerHTML = payload.images[ arrayCursor - 1 ].content || "Click here to edit the caption.";

          if( currentImage == img2 ) {
            img.src = payload.images[ arrayCursor - 1 ].src; 
            $(img).fadeIn( 200, doSetTimeOut );
            $(img2).fadeOut(); 
            currentImage = img;
          } else {
            img2.src = payload.images[ arrayCursor - 1 ].src;
            $(img2).fadeIn( 200, doSetTimeOut );
            $(img).fadeOut();
            currentImage = img2;
          }
          
          

      
          if( arrayCursor >= payload.images.length ) {
            arrayCursor = 0;
          }


     }


     holder.appendChild( img );
     holder.appendChild( img2 );
     holder.appendChild( label );
     holder.appendChild( caption );
     return holder;
  }

  editCurrentSlide( ) {
    isEditing = true;
    let caption = document.createElement("textarea");
  }

  deleteCurrentSlide( ) {

  }

}