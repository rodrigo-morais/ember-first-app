import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return Ember.$.getJSON('https://api.github.com/users/rodrigo-morais/repos').then(function(data){
            return data.sort(function(previous, next){
                if(previous.stargazers_count > next.stargazers_count){
                    return 1;
                }
                else if(previous.stargazers_count < next.stargazers_count){
                    return -1;
                }
                else{
                    return 0;
                }
            }).slice(0, 3);
        });
    }
});