


export default class Card {
  constructor( ) {
    this.name = 'card';
    this.previewName = 'card';
    this.previewImage = 'http://Chartholdr.io/line/160/100';
    this.type = 'dom';
    this.resizeMode  = this.resizeModeEnum.both;
    this.handle = createHandle();
    //this.editor = editor();
 

  }

  render( { env , options , payload } ) {
    let el = env.postModel.renderNode.element;

    el.insertBefore( createHandle( env , options ) , el.firstChild );
   switch( payload.pos ) {
    case "left":
      el.className = "card-left";
    break;
    case "right":
      el.className = "card-right";
    break;
    default:
      el.className = "card";
   }
  }

  preview( ) {
    //returns a place holder
  }



  get resizeModeEnum() {
    return {
      full_width_only : "full_width_only",
      half_width_only : "half_width_only",
      both            : "both"
    };
  }


}


   function createHandle( env , options ) {

    console.log( env , options );
      let holder = document.createElement('div');
      holder.contentEditable="false";
      holder.className="card-handle";
      if( options && options.onEdit ) {
        let editButton = document.createElement('button');
        editButton.value = "Edit";
        editButton.type = "button";
        editButton.innerHTML="Edit";
        editButton.addEventListener("click" , options.onEdit );

        holder.appendChild( editButton );
      }
      

      let delButtion = document.createElement('button');
        delButtion.value = "Del";
        delButtion.type = "button";
        delButtion.innerHTML="×";
        delButtion.addEventListener("click" ,e => env.remove());

        holder.appendChild( delButtion );
   
     
   

      return holder;
    }