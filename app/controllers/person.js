import Ember from "ember";

export default Ember.Controller.extend({
    actions: {
        test: function(){
            alert('Testing... Controller');
            return true;
        }
    }
});