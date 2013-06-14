// Footer
define([
    'text!templates/footer.html'],
    function(FooterTemplate) {

        var FooterView = Backbone.View.extend({

            tagName: "div",
            className: "container",       

            events: {
                //If more info link has been activated
                "click .show-credits" : "showCredits"
            },                   

            initialize:function () {
                this.render();
            },

            render:function () {
                var footerTemplate = _.template(FooterTemplate);
                $(this.el).html(footerTemplate);
                return this;
            },

            showCredits: function() {
                
            }
        });

        return FooterView;
});


