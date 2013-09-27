// Header View
define( ['marionette',
        'Handlebars',        
        'models/modelHeader',
        'text!templates/header.html'],
       function (Marionette, Handlebars, HeaderModel, HeaderTemplate) {
    
    var HeaderView = Marionette.ItemView.extend({
        template: Handlebars.compile(HeaderTemplate),
        className: "container",
        model: new HeaderModel()
    });
    
    return HeaderView;
});
        
