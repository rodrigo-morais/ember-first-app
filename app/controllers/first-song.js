import Ember from "ember";

export default Ember.ObjectController.extend({
    status: 'stop',
    duration: function(){
        var duration = this.get('model.duration'),
            minutes = Math.floor(duration / 60),
            seconds = duration % 60;

            if(seconds.toString().length <= 1){
                seconds = '0' + seconds;
            }

        return [minutes, seconds].join(':');
    }.property('model.duration')
});