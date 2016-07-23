


export default class Card {
  constructor( ) {
    this.name = 'card';
    this.previewName = 'card';
    this.previewImage = 'http://Chartholdr.io/line/160/100';
    this.type = 'dom';
    this.resizeMode  = this.resizeModeEnum.both;
  }

  render( { env , options , payload } ) {
    this.doFloat( env , payload );
  }

  preview( ) {
    //returns a place holder
  }

  doFloat( env , payload ) {
    switch( payload.pos ) {
    case "left":
      env.postModel.renderNode.element.className = "card-left";
    break;
    case "right":
      env.postModel.renderNode.element.className = "card-right";
    break;
    default:
      env.postModel.renderNode.element.className = "card";
   }
  }

  get resizeModeEnum() {
    return {
      full_width_only : "full_width_only",
      half_width_only : "half_width_only",
      both            : "both"
    };
  }


}