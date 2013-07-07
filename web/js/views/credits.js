// Credits

define([
    'json!data/credits.json',
    'views/photoCredits',
    'hbars!templates/credits'],  
    function(DataCredits, photoCreditsView, CreditsTemplate) {

        var CreditsView = Backbone.View.extend({      

            render:function () {           

                Handlebars.registerHelper('list', function(items, options) {
                  var out = "<ul>";

                  for(var i=0, l=items.length; i<l; i++) {
                    out = out + "<li>" + options.fn(items[i]) + "</li>";
                  }

                  return out + "</ul>";
                });

                //create modal
                var creditsTemplate = CreditsTemplate(DataCredits);

                //append modal to $el
                this.$el.html(creditsTemplate);

                return this;
            }
        });

        // Our module now returns our view
        return CreditsView;
    });
