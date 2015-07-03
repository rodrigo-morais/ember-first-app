import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(person) {
  let full = person.get('name') + ' ' + person.get('lastName');
    return new Ember.Handlebars.SafeString('<span> The full name is: ' + full + '</span>');
});