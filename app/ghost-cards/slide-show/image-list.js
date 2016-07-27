import $ from 'jquery';
const imageWidth = 200;


//drag and drop singletons:
if( !window.__drag ) {
	window.__drag = function( e ) { }
	window.__drop = function( e ) { }

	window.addEventListener('mousemove' , e => window.__drag( e ) );
	window.addEventListener('mouseup' , e => window.__drop( e ) );

}

export default class ImageList {
  constructor( imageSlides , width ) {
  	width = width || 400;
  	let holder = this.holder = document.createElement('div');
  	let lines = this.lines = [ [ ] ];
  	holder.className = 'card-slideshow-preview';

  	let accumulatedWidth = 0;
  	imageSlides.forEach( image => { 
  		lines[ lines.length - 1 ].push( new ImagePreview( image , 0 , 0 ) );
  		accumulatedWidth+=imageWidth;
  		if( accumulatedWidth > width ) {
  			lines.push( [ ] );
  			accumulatedWidth = 0;
  		}
//			let img = this.createImagePreview( image.src );
//			img.style.left = (imageWidth * n ) + "px";
//			holder.appendChild( img );
  		}
  	);

  	this.render();

  	return holder;
  }

 	render( ) {
 		this.holder.innerHTML = "";
 		for( let y = 0; y < this.lines.length; y++ ) {
 			let line = this.lines[ y ];
 			for( let x = 0; x < line.length; x++ ) {
 				line[ x ].xoffset = x * imageWidth;
 				line[ x ].yoffset = y * 100;
 				this.holder.appendChild( line[ x ].image );
 			}
 		}
 	}

}

class ImagePreview {
	constructor( image , xoffset , yoffset ) {
		this.image = this.createImagePreview( image.src );
		this._xoffset = xoffset || 0;
		this._yoffset = yoffset || 0;
		this.image.style.left = this.xoffset + "px";
		this.image.style.top = this.yoffset + "px";
		this.image.dragable = 'false';
		this.dragging = false;

		let dragOffset = { left : 0 , top : 0 };
	

		this.image.addEventListener('dragstart' , e => {  e.preventDefault(); return false; } );
		this.image.addEventListener('mousedown', function(e) { 
			let offset = $(this.image).offset();
			
			dragOffset.left = e.pageX - offset.left;
			dragOffset.top = e.pageY - offset.top;


			document.body.appendChild( this.image );
			this.image.style.zIndex = '999999';






			window.addEventListener('mousemove' , mouseMove.bind( this ) )
			window.addEventListener('mouseup' , mouseUp.bind( this ) );
			function mouseUp( e ) {
				//stop drag
				this.dragging = false;
				console.log("UP");
				window.removeEventListener( 'mouseup' , mouseUp.bind( this ) );
				window.removeEventListener( 'mousemove' , mouseMove.bind( this ) );
			}
			function mouseMove( e ) {
				
				this.image.style.position = "absolute";
				this.image.style.left = ( e.pageX - dragOffset.left )  + "px";
				this.image.style.top = ( e.pageY - dragOffset.top )  + "px";

				//console.log( e );
			}

		}.bind( this ) , false);
		


	}
	get xoffset( ) {
		return this._xoffset;
	}
	get yoffset( ) {
		return this._yoffset;
	}
	set xoffset( value ) {
		this._xoffset = value;
		this.image.style.left = value + "px";
	}
	set yoffset( value ) {
		this._yoffset = value;
		this.image.style.top = value + "px";
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