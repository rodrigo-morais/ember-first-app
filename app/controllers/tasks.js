import Ember from "ember";

export default Ember.ArrayController.extend({
    remaining: function(){
        var tasks = this.get('model');
        return tasks.filterBy('isDone', false).get('length');
    }.property('model.@each.isDone')
});