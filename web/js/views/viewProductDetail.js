// Product Detail
define(['marionette',
        'Handlebars',
        'text!templates/product-detail'],
    function(Marionette, Handlebars, DetailsTemplate) {

        var ProductDetail = Marionette.ItemView.extend({
            template: Handlebars.compile(DetailsTemplate)            
        });

        return ProductDetail;
    });




