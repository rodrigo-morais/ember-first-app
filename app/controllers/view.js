import Ember from "ember";

export default Ember.ObjectController.extend({
    actions: {
        viewClick: function(qty){
            alert('The clickable view was clicked ' + qty + ' times. Message from controller.');
        }
    }
});