import Card from './card';

export default class Graph extends Card {
	constructor( ) {
	super();
    this.name = 'graph';
    this.type = 'dom';
  

  }

  render( { env , options , payload } ) {
      let img = document.createElement('img');
    switch( payload.pos ) {
    case "left":
      env.postModel.renderNode.element.className = "card-left"
       img.src = "http://Chartholdr.io/pie/400";
    break;
    case "right":
      env.postModel.renderNode.element.className = "card-right"
       img.src = "http://Chartholdr.io/line/400/400";
    break;
    default:
      env.postModel.renderNode.element.className = "card"
       img.src = "http://Chartholdr.io/bar/800/400";
   }
     
   return img;
  }
}