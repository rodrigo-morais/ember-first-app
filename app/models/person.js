import Ember from 'ember';

export default Ember.Object.extend({
    init: function(){
    },
    say: function(){
        alert('Hello, ' + this.get('name'));
    },
    fullName: function(key, value){
        if(arguments.length > 1){
            var nameParts = value.split(/\s+/);
            this.set('name', nameParts[0]);
            if(nameParts.length > 1)
            {
                this.set('lastName', nameParts[1]);
            }
            else {
                this.set('lastName', '');
            }
        }
        return this.get('name') + ' ' + this.get('lastName');
    }.property('name', 'lastName'),
    description: function(){
        return this.get('fullName') + ' is ' + this.get('age') + ' years old.';
    }.property('age', 'fullName')
});