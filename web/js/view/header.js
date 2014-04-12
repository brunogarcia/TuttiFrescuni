// View Header
define( ['marionette',
        'Handlebars',
        'hbars!template/header'],
       function (Marionette, Handlebars, MyTemplate) { 
    
    var ViewHeader = Marionette.ItemView.extend({
    	tagName: "div",
    	className: "header",
		template: MyTemplate

    });
    
    return ViewHeader;
});
        
