import Ember from 'ember';

export default Ember.Component.extend({
	didRender( ) {
		this.element.addEventListener('dragstart' , event => window.dragel = this);
	}
});
