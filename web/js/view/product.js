// Item View - Product
define( ['marionette',
        'Handlebars',
        'hbars!template/product'],
       function (Marionette, Handlebars, MyTemplate) {
    
    var ProductView = Marionette.ItemView.extend({
        tagName: "li",
        template: MyTemplate,
        
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
        
