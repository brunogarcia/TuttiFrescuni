//Products Collection 
define(['helper/dateRange', 'model/product', 'backbone'],
	function(DateRange, ModelProduct) {
		var Products = Backbone.Collection.extend({
			model: ModelProduct,
			url: "../js/data/months/" + DateRange.getMonth({'type': 'number'}) + ".json",
			comparator: "nameProduct"
		});
		return Products;
	});

