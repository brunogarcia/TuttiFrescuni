// Footer
define([
    'hbars!templates/footer',
    'views/credits'],
    function(FooterTemplate, CreditsView) {

        var FooterView = Backbone.View.extend({

            tagName: "div",
            className: "container",       

            events: {
                //If show credits link has been activated
                "click .show-credits" : "showCredits"
            },                   

            initialize:function () {
                this.render();
            },

            render:function () {
                var footerTemplate = FooterTemplate();
                $(this.el).html(footerTemplate);
                return this;
            },

            showCredits: function() {
                //create View
                creditsView = new CreditsView();

                //add View to #content
                $('#credits').html(creditsView.render().el);    

            }
        });

        return FooterView;
});


