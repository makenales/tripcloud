import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',
	sortedCustomers: Ember.computed.sort('filteredCustomers', 'sortDefinition'),
	reverseSort: false, // default sort in ascending order
	sortDefinition: Ember.computed('sortBy', 'reverseSort', function() {
	  let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
	  return [ `${this.get('sortBy')}:${sortOrder}` ];
	}),
	searchText: null,
	minRevenue: null,
	maxRevenue: null,
    filteredCustomers: function() {
        var model      = this.get('customers');
        var searchText = this.get('searchText');
        var minRevenue = parseInt(this.get('minRevenue'));
        var maxRevenue = parseInt(this.get('maxRevenue'));
        var filterBy   = 'relationshipManager';        

        if (searchText){          
          model = model.filter( function(item){
            return Em.get(item,filterBy).indexOf(searchText) >= 0;
          });
        }

        if (minRevenue > 0){          
          model = model.filter( function(item){
          	var value = Em.get(item,'revenueGenerated');
          	value = value.toString().replace("$", "");
  			value = value.replace(/,/g , "");
            return value >= minRevenue;
          });
        }
        
        if (maxRevenue > 0){          
          model = model.filter( function(item){
          	var value = Em.get(item,'revenueGenerated');          	
          	value = value.toString().replace("$", "");
  			value = value.replace(/,/g , "");
            return value <= maxRevenue;
          });
        }
        return model;
    }.property('searchText','minRevenue', 'maxRevenue')
});