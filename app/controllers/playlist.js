import Ember from "ember";

export default Ember.ArrayController.extend({
    sortProperties: ['artist'],
    sortAscending: true,
    duration: function(){
        var total = this.get('model').reduce(function(previous, current){
                        return previous + current.duration;
                    }, 0),
            minutes = Math.floor(total / 60),
            seconds = total % 60;

            if(seconds.toString().length <= 1){
                seconds = '0' + seconds;
            }

        return [minutes, seconds].join(':');
    }.property('model.@each.duration')
});