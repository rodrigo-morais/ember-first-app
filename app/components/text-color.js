import Ember from "ember";

export default Ember.Component.extend({
    attributeBindings: 'color:data-color',
    text: '',
    color: '#000000',
    actions: {
        changeColor: function(){
            let color = Ember.$(this.get('element')).css('color') === 'rgb(0, 0, 0)' ? '#00FF6A' : '#000000',
                oppositeColor = color === '#000000' ? '#00FF6A' : "#000000";

            this.set('text', this.get('text') + ' clicked');
            this.set('color', oppositeColor);
            Ember.$(this.get('element')).css('color', color);


            this.sendAction('changeColor', color);
        }
    }
});