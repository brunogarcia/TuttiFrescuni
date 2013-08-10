//Collection Products

define(["../models/product"],
    function(ProductModel) {
        var thisDate = new Date(),
        	thisMonth = thisDate.getMonth(),
        	ProductData = "/js/data/months/" + thisMonth + ".json",
        	Products = Backbone.Collection.extend({
            	model: ProductModel,
            	url: ProductData
        });

    return Products;
});

