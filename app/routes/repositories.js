import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(){
        console.log('Repositories routes - beforeModel');
    },
    model: function(){
        return Ember.$.getJSON('https://api.github.com/users/rodrigo-morais/repos');
    },
    afterModel: function(repositories){
        console.log('Repositories routes - afterModel');
        if(repositories.length <= 3){
            this.transitionTo('firstThreeRepos', repositories);
        }
    }
});