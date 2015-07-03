import Ember from 'ember';

export default Ember.Handlebars.registerHelper('fullname', function(value, options){
    let full = value.get('name') + ' ' + value.get('lastName');
    return new Ember.Handlebars.SafeString('<span> The full name is: ' + full + '</span>');
}, 'name', 'lastName');