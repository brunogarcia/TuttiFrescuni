// Composite View - Main
define( ["marionette",
        "Handlebars",        
        "view/product",
        "hbars!template/main"],
       function (Marionette, Handlebars, ViewProduct, MyTemplate) {
    
    var ViewMain = Marionette.CompositeView.extend({

        tagName: "div",
        className: "row",

        template: MyTemplate,
        itemView: ViewProduct,

        appendHtml: function(collectionView, itemView){
            if (itemView.model.attributes.idCategory === "1") {
                collectionView.$("#vegetables ul").append(itemView.el);                
            } else {
                collectionView.$("#fruits ul").append(itemView.el);
            }            
        }        
    });
    
    return ViewMain;
});
        
