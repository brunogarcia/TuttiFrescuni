// Product Item View
define( ['marionette',
        'Handlebars',
        'models/modelProductDetail',
        'views/viewProductDetail',
        'text!templates/product.html',
        'backbone','bsTransition', 'bsModal'],
       function (Marionette, Handlebars, DetailModel, DetailView, ProductTemplate) {
    
    var ProductView = Marionette.ItemView.extend({
        template: Handlebars.compile(ProductTemplate),
        tagName: "li",
        events: {
            'click .product-detail' : 'showDetails'
        },
        showDetails: function() {
            var detailView = new DetailView({
                    model: new DetailModel({
                        idProduct: this.model.attributes.idProduct,
                        nameProduct: this.model.attributes.nameProduct,
                        BigPhoto: this.model.attributes.BigPhoto
                    })
                });
                
            $('#details-region').html(detailView.render().el);
        }
    });
    
    return ProductView;
});
        
