import Ember from 'ember';
import Person from '../models/person';

export default Ember.Route.extend({
    model: function(){
        let people = [];

        for(let counter = 0; counter < 10; counter = counter + 1){
            let person = Person.create(
                            {
                                name: 'Person ' + counter,
                                age: 20 + counter,
                                isAdult: (20 + counter) > 21 ? true : false
                            }
                        );
            people.push(person);
        }

        return people;
    }
});