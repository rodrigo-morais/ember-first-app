import Ember from "ember";

export default Ember.Component.extend({
    text: '',
    actions: {
        changeColor: function(){
            this.set('text', this.get('text') + ' clicked');
            if(Ember.$(this.get('element')).css('color') === 'rgb(0, 0, 0)'){
                Ember.$(this.get('element')).css('color', '#00FF6A');
            }
            else{
                Ember.$(this.get('element')).css('color', '#000000');
            }
        }
    }
});