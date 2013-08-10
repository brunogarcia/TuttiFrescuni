// Product Details
define(['text!templates/photo-credit.html'],
    function(photoCreditsTemplate) {

        var PhotoCredits = Backbone.View.extend({

            render: function() {
                
                // Using Underscore we can compile our template with data model
                var compiledTemplate = _.template(photoCreditsTemplate, this.model.toJSON());

                // Append our compiled template to this Views "el"
                this.$el.html(compiledTemplate);
                return this;                 
            }            
        
        });

        return PhotoCredits;
    });




