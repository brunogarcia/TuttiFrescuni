// Product Model
define( ['backbone'], function ( ) {
    var Product = Backbone.Model.extend({
        defaults:{
            "idProduct": null,
            "idCategory": "",
            "nameProduct": "",
            "SmallPhoto": "",
            "BigPhoto": ""
        }
    });
    return Product;
});

