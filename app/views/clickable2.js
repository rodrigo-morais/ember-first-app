import Ember from 'ember';

export default Ember.View.extend({
    number: 0,
    click: function(e){
        let num = this.get('number');
        num = num + 1;
        this.set('number', num);
        this.get('controller').send('viewClick', num)
    }
});