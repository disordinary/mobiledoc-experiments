


export default class Card {
  constructor( ) {
    this.name = 'kitten';
    this.type = 'dom';
    this.resizeMode  = this.resizeModeEnum.both;
  }

  render( { env , options , payload } ) {
      let img = document.createElement('img');
    switch( payload.pos ) {
    case "left":
      env.postModel.renderNode.element.className = "card-left"
       img.src = "https://placekitten.com/400/400";
    break;
    case "right":
      env.postModel.renderNode.element.className = "card-right"
       img.src = "https://placekitten.com/401/401";
    break;
    default:
      env.postModel.renderNode.element.className = "card"
       img.src = "https://placekitten.com/800/400";
   }
     
   return img;
  }

  get resizeModeEnum() {
    return {
      full_width_only : Symbol(),
      half_width_only : Symbol(),
      both            : Symbol()
    }
  }

}