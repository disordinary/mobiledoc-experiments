import $ from 'jquery';
const imageWidth = 100;
const imageHeight = 66

//drag and drop singletons:
if( !window.__drag ) {
	window.__drag = function( e ) { }
	window.__drop = function( e ) { }
	window.__mouseMove = function( e ) { }
	window.__mouseUp = function( e ) { }
	window.addEventListener('mousemove' , e => window.__mouseMove( e ) );
	window.addEventListener('mouseup' , e => window.__mouseUp( e ) );

}

export default class ImageList {
  constructor( imageSlides , width ) {
  	this.imageSlides = imageSlides;
  	this.width = width || 600;

  	let imagePreviews = this.imagePreviews = [ ]; //preview images
  	this.dragImage;
  	this.dropImageLocation = null; //the offset location of the current hover location

  	let holder = this.holder = document.createElement('div');
  	let lines = this.lines = [ [ ] ];
  	let hoverImage = { image : null , inside : null };
  	holder.className = 'card-slideshow-preview';

  
  	imageSlides.forEach( ( image , i ) => imagePreviews.push( new ImagePreview( image , i ) ) );


  	window.__mouseMove =  e => {
  		window.__drag( e );
  		if( window.__dragging ) {
  			imagePreviews.forEach( ( image , i )=> {
  				if( image !== window.__dragging ) {
  					let inside = image.inside( e.pageX , e.pageY );
  					if( hoverImage.image === image && hoverImage.inside === inside ) {
  							return;
  						}

  					if( inside ) {
  						if( inside === 'left' ) {
							this.dropImageLocation = i ;
						} else {
  							this.dropImageLocation = i + 1;
  						}
  						hoverImage = { image , inside };
  						this.rerender();
  					}
  				}
  			} );
  		}

  	}

  	window.__mouseUp = e => {
  		if( window.__dragging ) {

  			
  			let $holder = $( this.holder );

			let offset = $holder.offset( );
			let width = $holder.width( );
			let height = $holder.height( );

			//if its inside the box we move the image
  			if( e.pageX > offset.left && e.pageX < offset.left + width && e.pageY > offset.top && e.pageY < offset.top + height ) {
	  			this.holder.appendChild( window.__dragging.image );
	  			this.imageSlides.splice( window.__dragging.offset , 1 );
	  			this.imageSlides.splice( this.dropImageLocation , 0 , window.__dragging.slide );
  			} else {
  				window.__dragging.$image.fadeOut( 'slow', ( ) => window.__dragging.$image.remove() );
  				this.imageSlides.splice( window.__dragging.offset , 1 );
  				
  			}
  			
  			//otherwise we delete it.


  			this.imagePreviews.length = 0;
  			imageSlides.forEach( ( image , i ) => imagePreviews.push( new ImagePreview( image , i ) ) );
  			
  		}

  		window.__drop( e );
  		this.render( false );
  	}



  	this.render();

  	return holder;
  }

  rerender( ) {
  		let accumulatedWidth = 0;
		let accumulatedHeight = 0;
		this.imagePreviews.forEach( ( image , i ) => { 		
	  		if( i === this.dropImageLocation ) {
	  			accumulatedWidth += imageWidth;
	  		
	  		}
	  		if( accumulatedWidth > this.width ) {
	  			accumulatedHeight += imageHeight;
	  			accumulatedWidth = 0;
	  		}

	  		if( image !== window.__dragging ) {

	  			image.xoffset = accumulatedWidth;
	  			image.yoffset = accumulatedHeight;
	  			image.animate();
 				accumulatedWidth+=imageWidth;
 			}

	  	});

  }

 	render( fade = true ) {
		let accumulatedWidth = 0;
		let accumulatedHeight = 0;
		this.holder.innerHTML = "";
		this.imagePreviews.forEach( ( image , i ) => { 		
	  		
	  		if( accumulatedWidth > this.width ) {
	  			accumulatedHeight += imageHeight;
	  			accumulatedWidth = 0;
	  		}

	  		image.xoffset = accumulatedWidth;
	  		image.yoffset = accumulatedHeight;
	  		image.move();

	  		if( fade ) {
 				image.$image.hide();
 			
 				setTimeout( _ => image.$image.fadeIn( ) , ++i * 333 );		
 			}
 			this.holder.appendChild( image.image );

 			accumulatedWidth+=imageWidth;

	  	});

 	}

}

class ImagePreview {
	constructor( slide , offset ) {
		this.slide = slide;
		this.offset = offset;
		this.image = this.createImagePreview( slide.src );
		this._xoffset = 0;
		this._yoffset = 0;
		this.image.style.left = this.xoffset + "px";
		this.image.style.top = this.yoffset + "px";
		this.image.dragable = 'false';
		this.$image = $(this.image);
		this.dragging = false;

		let dragOffset = { left : 0 , top : 0 };
	

		this.image.addEventListener('dragstart' , e => {  e.preventDefault(); return false; } );
		this.image.addEventListener('mousedown', e => { 
			let offset = $(this.image).offset();
			
			dragOffset.left = e.pageX - offset.left;
			dragOffset.top = e.pageY - offset.top;


			document.body.appendChild( this.image );
			this.image.style.zIndex = '999999';

			this.image.style.position = "absolute";
			this.image.style.left = ( e.pageX - dragOffset.left )  + "px";
			this.image.style.top = ( e.pageY - dragOffset.top )  + "px";



			window.__drag = mouseMove.bind( this );
			window.__drop = mouseUp.bind( this );
			window.__dragging = this;
			
			function mouseUp( e ) {
				//stop drag
				this.dragging = false;
				window.__dragging = null;
				window.__drag = function( e ) { };
				window.__drop = function( e ) { };
			}
			function mouseMove( e ) {
				
				this.image.style.position = "absolute";
				this.image.style.left = ( e.pageX - dragOffset.left )  + "px";
				this.image.style.top = ( e.pageY - dragOffset.top )  + "px";


				//console.log( e );
			}

		} , false);
		
	}

	inside( x , y ) {
		let offset = this.$image.offset( );
		let width = this.$image.width( );
		let height = this.$image.height( );

		if( x > offset.left && x < offset.left + width && y > offset.top && y < offset.top + height ) {
	
			if( x > offset.left + ( width / 2 ) ) {
				return 'right';
			} else {
				return 'left';
			}
		}

		return null;
	}

	get xoffset( ) {
		return this._xoffset;
	}
	get yoffset( ) {
		return this._yoffset;
	}
	set xoffset( value ) {
		this._xoffset = value;
		
	}
	set yoffset( value ) {
		this._yoffset = value;
		
	}
	move( ) {
		this.image.style.left = this._xoffset + "px";
		this.image.style.top = this._yoffset  + "px";
	}
	animate( ) {
		this.$image.animate({ 
        	top: this._yoffset,
        	left: this._xoffset
      	}, 100 );
	}
	  createImagePreview( path ) {
  		let image = document.createElement( 'img' );
  		image.src = path;
  		image.width = imageWidth;
  		image.style.position="absolute";
  		image.style.top="0px";
  		return image;
  }
}