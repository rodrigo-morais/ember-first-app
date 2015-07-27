import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return [
            {
                title: 'To be with you',
                artist: 'Mr. Big',
                duration: 123
            },
            {
                title: 'My Girl',
                artist: 'The Tempations',
                duration: 112
            },
            {
                title: 'Better Together',
                artist: 'The Johnson',
                duration: 151
            }
        ];
    },
    setupController: function(controller, songs){
        controller.set('model', songs[0]);
    }
});