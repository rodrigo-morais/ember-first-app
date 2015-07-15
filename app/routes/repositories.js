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
    },
    actions: {
        loading: function(){
            console.log('Repositories route - action - loading');
        },
        willTransition: function(transition){
            let abandon = confirm('Are you sure you want to abandon this page');
            
            if(abandon)
            {
                return true;
            }
            else{
                transition.abort();
            }
        }
    }
});