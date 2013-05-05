// Product Details
define([
    'text!templates/product-details.html'],
    function(productDetailsTemplate) {

        var ProductDetails = Backbone.View.extend({

            render:function () {                
                
                // Using Underscore we can compile our template with data model
                var compiledTemplate = _.template(productDetailsTemplate, this.model.toJSON());

                // Append our compiled template to this Views "el"
                this.$el.html(compiledTemplate);
                return this;

            }     
        
        });

        return ProductDetails;
    });




