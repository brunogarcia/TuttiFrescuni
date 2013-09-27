// Footer View
define( ['marionette',
        'Handlebars',        
        'models/modelFooter',
        'text!templates/footer.html'],
       function (Marionette, Handlebars, FooterModel, FooterTemplate) {
    
    var FooterView = Marionette.ItemView.extend({
        template: Handlebars.compile(FooterTemplate),
        className: "container",
        model: new FooterModel()
    });
    
    return FooterView;
});
        
