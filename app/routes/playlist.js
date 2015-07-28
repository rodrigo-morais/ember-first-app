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
                artist: 'Jack Johnson',
                duration: 151
            }
        ];
    }
});