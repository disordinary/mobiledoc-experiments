
export default class Comment {
  constructor( ) {
    this.tagName = "mark";
    this.commentEl = null;
  }
  
  render(env) {
    
    env.onDelete( e => alert("DELETE!")); 
    env.didRender( e => {
      let commentOffset = env.element.attributes.getNamedItem('data-comment-id');
      if( commentOffset === undefined || commentOffset === null ) {
        throw new Error("No comment offset");
      }

      this._comment = env.editor.comments[ commentOffset.value - 1 ];
      let tag = this.lazyCreateComment( document.getElementsByTagName( 'body' )[ 0 ]);
      let clientRect = env.element.getBoundingClientRect();
      tag.style.top = clientRect.top + 'px';
      tag.style.right = 100 + 'px';

    });
    env.onTeardown( e => alert("TEAR DOWN"));
    env.element.addEventListener("mouseenter", event => {
        event.target.style="background-color:red;";
      } );

    env.element.addEventListener("mouseleave" , event => {
        event.target.style="";
    });

    //env.onTeardown( _ => alert("TEARDOWN"));

  }

  lazyCreateComment( root ) {
    if( this._comment._dom ) return this._comment._dom;
    let tag = document.createElement("div");
    let text = document.createElement("textarea");
    tag.appendChild( text );
    tag.className="comment";
    tag.style.position="absolute";
    root.appendChild( tag );
    this._comment._dom = tag;
    return tag;

  }
  
}

