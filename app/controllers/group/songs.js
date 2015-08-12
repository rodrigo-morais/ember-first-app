import Ember from "ember";

export default Ember.ArrayController.extend({
    needs: 'group',
    group: Ember.computed.alias("controllers.group")
});