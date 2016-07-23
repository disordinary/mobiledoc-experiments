import Card from './card';

export default class Graph extends Card {
	constructor( ) {
	  super();
    this.name = 'graph';
    this.previewName = 'placeholder graph';
       this.previewImage = 'http://Chartholdr.io/line/120/80';
  }

  render( { env , options , payload } ) {
    super.doFloat( env , payload );  
    let img = document.createElement('img');
    switch( payload.pos ) {
    case "left":
       img.src = "http://Chartholdr.io/pie/400";
    break;
    case "right":
       img.src = "http://Chartholdr.io/line/400/400";
    break;
    default:
       img.src = "http://Chartholdr.io/bar/800/400";
   }
     
   return img;
  }
}