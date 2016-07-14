
export default class Comment {
  constructor( ) {
    this.tagName = "mark";
  }
  
  render(env) {
    console.log( env );
    env.element.addEventListener("mouseenter", event => {
        event.target.style="background-color:red;";
      } );

    env.element.addEventListener("mouseleave" , event => {
        event.target.style="";
    });

    //env.onTeardown( _ => alert("TEARDOWN"));

  }
  
}

