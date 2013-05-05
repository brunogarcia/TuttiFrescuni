// Models Products
define( [], function ( ) {
    var Product = Backbone.Model.extend({
        defaults:{
            "idProduct": null,
            "idCategory":"",
            "nameProduct":"",
            "SmallPhoto": "",
            "BigPhoto": ""
        }
    });
    return Product;
});

