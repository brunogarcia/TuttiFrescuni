//Collection Products

define([
    "../models/product"],
    function(ProductModel) {
        var Products = Backbone.Collection.extend({
            model: ProductModel,
            url: "api/tutti.php/seasons/best"
        });

    return Products;
});

