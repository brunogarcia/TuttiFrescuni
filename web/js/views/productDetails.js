// Product Details
define(['hbars!templates/product-details'],
    function(productDetailsTemplate) {

        var ProductDetails = Backbone.View.extend({

            render:function () {                
                
                // Using Underscore we can compile our template with data model
                var compiledTemplate = productDetailsTemplate(this.model.toJSON());

                // Append our compiled template to this Views "el"
                this.$el.html(compiledTemplate);
                return this;

            }     
        
        });

        return ProductDetails;
    });




