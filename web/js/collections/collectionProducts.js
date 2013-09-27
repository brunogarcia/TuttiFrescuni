//Products Collection 
define(['utils/getDate', '../models/modelProduct', 'backbone'],
    function(Date, ProductModel) {
        var Products = Backbone.Collection.extend({
		model: ProductModel,
		url: "/js/data/months/" + Date.getMonth({'type': 'number'}) + ".json",
		comparator: "nameProduct"
        });
        return Products;
});

