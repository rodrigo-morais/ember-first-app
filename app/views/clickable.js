import Ember from 'ember';

export default Ember.View.extend({
    templateName: "clickable",
    text: 'This view is clickable',
    click: function(e){
        alert("You click in a clickable view.");
    }
});