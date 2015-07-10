import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        var repos = Ember.$.getJSON('https://api.github.com/users/rodrigo-morais/repos');

        var successOne = (data) => {
            console.log('successOne: ' + data.length);
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
        };

        var successTwo = (data) => {
            console.log('successTwo: ' + data.length);
            return data;
        };

        var successThree = (data) => {
            console.log('successThree: ' + data.length);
            return data;
        };

        var reject = (reason) => {
            console.log('reject: ' + reason);
            return true;
        };

        return repos
            .then(successOne)
            .then(successTwo)
            .then(successThree, reject);
    }
});