import Ember from "ember";

export default Ember.Component.extend({
    attributeBindings: 'color:data-color',
    text: '',
    color: '#000000',
    actions: {
        changeColor: function(){
            this.set('text', this.get('text') + ' clicked');
            if(Ember.$(this.get('element')).css('color') === 'rgb(0, 0, 0)'){
                this.set('color', '#00FF6A');
                Ember.$(this.get('element')).css('color', '#00FF6A');
            }
            else{
                this.set('color', '#000000');
                Ember.$(this.get('element')).css('color', '#000000');
            }
        }
    }
});