// Detail Model
define( ['backbone'], function ( ) {
    var Detail = Backbone.Model.extend({
        defaults:{
            "idProduct": null,
            "nameProduct": "",
            "BigPhoto": ""
        }
    });
    return Detail;
});

