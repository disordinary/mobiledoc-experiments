import $ from 'jquery';


export default class ImageSlide {
  constructor( ) {
    this.cbs = [ ];
    this.isEditing = false;
    this.holder = document.createElement("div");
    
    this.img = document.createElement("img");
    this.caption = document.createElement("p");

    this.holder.className = "slideshow-slide-holder";
    this.holder.style.position = "absolute";
    this.img.style.position = this.caption.style.position = "absolute";
    this.holder.style.top = "0px";
    this.holder.style.width = this.img.style.width = this.caption.style.width = "100%";
    this.holder.style.height = "400px";
    
    this.caption.style.bottom   = "0px";
    
    this.caption.style.padding = "10px";

    this.holder.appendChild( this.img );
    this.holder.appendChild( this.caption );
    this.caption.addEventListener("click" , this.edit.bind( this ) );

    this.slide = null;
  }

  edit( e ) {  
        if( this.slide.editable === false ) return;
       let caption = document.createElement("textarea");
       caption.style.position = "absolute";
       caption.style.bottom   = "0px";
      
       this.holder.appendChild( caption );
       caption.style.display = 'inline';
       caption.value = this.slide.content;
       caption.select();
     

       caption.addEventListener("keypress" , e => {
        if( e.keyCode === 13 ) {
          this.isEditing = false;
          caption.style.display = 'none';
          this.slide.content = caption.value;
          this.caption.innerHTML = caption.value;
          this.holder.removeChild( caption );
          
        }
      });
       this.isEditing = true;
  }

  render( ) {
    return this.holder;
  }

  save( ) {

  }

  update( slide ) {
    this.slide = slide;
    this.caption.innerHTML = slide.content || "Click here to enter content!";
    this.img.src = slide.src;
  }
  _doUpdate( ) {
    this.cbs.forEach( cb => cb());
  }
  onUpdate( cb ) {
    this.cbs.push( cb );
  }

  fadeOut( cb ) { 
    let $holder = $(this.holder);
    let $image = $(this.img);
    let imageHeight = $image.height( );
    let holderHeight = $holder.height(); 
    $holder.css("z-index", 0);
    $holder.fadeOut();
    $image.animate({
      
      top: -imageHeight,
      }, 2000, _ => cb ? cb() : null );
  }

  fadeIn( cb ) {
    let $holder = $(this.holder);
    let $image = $(this.img);

    $holder.fadeIn();
    let imageHeight = $image.height( );
    let holderHeight = $holder.height(); 

    $holder.css("z-index", 9999);
    $image.css("top", -((imageHeight  / 2) - (holderHeight / 2))+ 'px');
  }
}