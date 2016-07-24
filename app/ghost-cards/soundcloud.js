import Card from './card';


export default class SoundCloud extends Card {
  constructor( ) {
    super();
    this.name = 'sound-cloud';
    this.previewName = 'soundcloud player';
    this.previewImage = 'data:image/jpeg;base64,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';
    
  }

  render( { env , options , payload } ) {

    options.onEdit = ( ) => { doEdit(); };
    super.render( { env , options , payload } ); 
    
    let holder = document.createElement("div");
    holder.className = "card-soundcloud";

    function doEdit( ) {
      let label = document.createElement("label");
      let input = document.createElement("input");



      input.addEventListener("keyup" , e => { 
        
        if( e.keyCode === 13 ) {
          payload.url = encodeURI(input.value);
          doRender();
        }
      } );

      input.value = payload.url || "https://api.soundcloud.com/tracks/2"
      label.appendChild( document.createTextNode("Paste the URL to the soundcloud file: "));
      label.appendChild( input );
      holder.innerHTML = "";
      holder.appendChild( label );
      
    }

    function doRender( ) {
      holder.innerHTML = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=' +   payload.url + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';  
    }

    if( !payload.url ) {
      doEdit( );
    } else {
      doRender( );
    }

    return holder;
  }
}



