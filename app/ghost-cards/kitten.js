import Card from './card';


export default class Kitten extends Card {
  constructor( ) {
    super();
    this.name = 'kitten';
    this.previewName = 'placeholder kitten';
    this.previewImage = 'https://placekitten.com/120/80';
  }

  render( { env , options , payload } ) {
    super.doFloat( env ,payload );  

    let img = document.createElement('img');
    
    switch( payload.pos ) {
    case "left":
           img.src = "https://placekitten.com/400/400";
    break;
    case "right":
           img.src = "https://placekitten.com/401/401";
    break;
    default:
           img.src = "https://placekitten.com/800/400";
   }
   return img;
  }
}