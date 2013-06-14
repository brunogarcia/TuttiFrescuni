// Months & Seasons
define([
    'text!templates/months-and-seasons.html'],
    function(monthsAndSeasonsTemplate) {

        var MonthsAndSeasons = Backbone.View.extend({

            tagName: "ul",
            className: "months-and-seasons",

            render:function () {                
                
                // Using Underscore we can compile our template with data model
                var compiledTemplate = _.template(monthsAndSeasonsTemplate, this.collection.toJSON());

                // Append our compiled template to this Views "el"
                this.$el.html(compiledTemplate);
                return this;
            }     
        
        });

        return MonthsAndSeasons;
    });




