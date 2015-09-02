import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        viewClick2: function(qty){
            alert('The clickable view was clicked ' + qty + ' times. Message from route.');
        }
    }
});