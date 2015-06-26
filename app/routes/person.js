import Ember from 'ember';
import Person from '../models/person';

export default Ember.Route.extend({
    model: function(){
        let person = Person.create({
            name: 'Rodrigo',
            lastName: 'Morais',
            age: '20'
        });
        return person;
    }
});