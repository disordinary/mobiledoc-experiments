export default class comment {
	constructor( ) {
		this.name = 'comment';
  		this.type = 'dom';	
	}
  
	  render({ env, options, value, payload}) {
	    return document.createTextNode('COMMENT');
	  }
};