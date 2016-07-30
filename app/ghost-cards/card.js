


export default class Card {
  constructor( ) {
    this.name = 'card';
    this.previewName = 'card';
    this.previewImage = 'http://Chartholdr.io/line/160/100';
    this.type = 'dom';
    this.resizeMode  = this.resizeModeEnum.both;
  }


  edit( { env , options , payload , buttons  } ) {
    let el = env.postModel.renderNode.element;
    el.draggable = "false";
    el.addEventListener('dragstart' , e => {  e.preventDefault(); return false; } );
   

    let handle = new Handle( { env , options , payload } );
    if( buttons ) {

      buttons.forEach( item => handle.addButton( item.name , _ => { el.removeChild( handle.holder ); item.onclick( ); }) );
    }
    el.insertBefore( handle.holder , el.firstChild );


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

  render( { env , options , payload  , buttons } ) {
    let el = env.postModel.renderNode.element;
    el.draggable = "false";
    el.addEventListener('dragstart' , e => {  e.preventDefault(); return false; } );
    //let handle = createHandle( { env , options , payload , canEdit , editName } );
    
    //el.insertBefore( handle , el.firstChild );
    
    let handle = new Handle( { env , options , payload } );
    if( buttons ) {

      buttons.forEach( item => handle.addButton( item.name , _ => { el.removeChild( handle.holder ); item.onclick( ); }) );
    }
    el.insertBefore( handle.holder , el.firstChild );

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


class Handle {
  constructor( { env , options , payload } ) {
    let holder = this.holder = document.createElement( 'div' );

      holder.contentEditable="false";
      holder.className="card-handle";

      let dragger =  document.createElement('button');
        dragger.value = "Dragger";
        dragger.type = "button";
        dragger.className = 'move';
        dragger.innerHTML="&nbsp;";
        dragger.draggable="true";
        dragger.addEventListener('dragstart' , event => window.dragel = this);
        dragger.addEventListener('drag' , event => console.log("DRAGGING" , event ));
       // holder.appendChild( dragger );
     
      let delButtion = document.createElement('button');
        delButtion.value = "Del";
        delButtion.type = "button";
        delButtion.innerHTML="×";

        if( env.strikeOne ) {
          delButtion.className = "confirm";
        }
        delButtion.addEventListener("click" , e => { 
          if( !env.strikeOne ) {
            delButtion.className = "confirm";
            env.strikeOne = true;
            setTimeout( _ => {
              delButtion.className = "";
              delete env.strikeOne;
            } , 3000 );
          } else {
           
            $( env.postModel.renderNode._element ).slideUp( env.remove );
           //env.remove(); 
          }
          //env.remove();
        });

        holder.appendChild( delButtion );

  }

  addButton( name , callback ) {
    let button = document.createElement('button');
       
      button.type = "button";
      button.innerHTML= name;
      button.addEventListener("click" , callback );

      this.holder.insertBefore( button , this.holder.getElementsByTagName('button')[ 0 ] );
  }
}

