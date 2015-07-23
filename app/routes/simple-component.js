import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return {title: 'route'};
    },
    actions: {
        changeColor: function(color){
            if(color === '#000000'){
                Ember.$('body').css('background-color', "#FFFFFF");
            }
            else{
                Ember.$('body').css('background-color', "#F5A300");
            }
        }
    }
});