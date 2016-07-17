import Ember from 'ember';

export default Ember.Component.extend({
		didRender( ) {
			this.$('#card-drop')[0].addEventListener('dragstart' , event => window.dragel = "kitten");
			this.$('#card-drop2')[0].addEventListener('dragstart' , event => window.dragel = "graph");
			this.$('#card-drop3')[0].addEventListener('dragstart' , event => window.dragel = "slide-show");
		}
});
