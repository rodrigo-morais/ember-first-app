import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller){
        controller.set('title', 'Hello First App');
    },
    actions: {
        test: function(){
            alert('Testing... App Route');
        }
    }
});