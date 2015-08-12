import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return [
            {
                name: 'Help',
                duration: 120
            },
            {
                name: 'Yesterday',
                duration: 90
            },
            {
                name: 'All you need is love',
                duration: 115
            }
        ];
    }
});