import Ember from 'ember';

export default Ember.Object.extend({
    init: function(){
    },
    say: function(){
        alert('Hello, ' + this.get('name'));
    },
    fullName: function(){
        return this.get('name') + ' ' + this.get('lastName');
    }.property('name', 'lastName')
});