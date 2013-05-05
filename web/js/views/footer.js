// Footer
define([
    'text!templates/footer.html'],
    function(FooterTemplate) {

        var FooterView = Backbone.View.extend({

            tagName: "div",
            className: "container",            

            initialize:function () {
                this.render();
            },

            render:function () {
                var footerTemplate = _.template(FooterTemplate);
                $(this.el).html(footerTemplate);
                return this;
            }
        });

        return FooterView;
});


