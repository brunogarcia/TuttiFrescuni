// Products Composite View
define( ["marionette",
        "Handlebars",        
        "views/viewProduct",
        "text!templates/products.html"],
       function (Marionette, Handlebars,
                 ProductView, ProductsTemplate) {
    
    var ProductsView = Marionette.CompositeView.extend({
        className: "container",
        template: Handlebars.compile(ProductsTemplate),
        itemView: ProductView,

        appendHtml: function(collectionView, itemView){
            if (itemView.model.attributes.idCategory === "1") {
                collectionView.$("#vegetables ul").append(itemView.el);                
            } else {
                collectionView.$("#fruits ul").append(itemView.el);
            }            
        }        
    });
    
    return ProductsView;
});
        
