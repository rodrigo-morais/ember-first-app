import Ember from 'ember';
import Task from '../models/task';

export default Ember.Route.extend({
    model: function(){
        let tasks = [];

        for(let counter = 0; counter < 5; counter = counter +1){
            let task = Task.create({
                name: 'Task ' + counter,
                isDone: false
            });
            tasks.push(task);
        }
        return tasks;
    }
});