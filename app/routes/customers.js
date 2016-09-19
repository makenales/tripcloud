import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('https://www.mychoice.co.in/crm-sample.json').then(function(json) {
		var customers = json;
		var unique = [];
		var managers = [];
		$.each( customers, function(key,value) {
			unique.push(value['relationshipManager']);
		});
		unique = $.unique(unique);

		managers.push({id: null, text: "All"});
		$.each(unique, function(key,value) {
			managers.push({id: value, text: value});
		});

		return {customers: customers, managers: managers};
    });
  }
});