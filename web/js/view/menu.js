// View Menu
define( ['marionette',
        'Handlebars',
        'hbars!template/menu',
        'helper/hbsList'
        ],
       function (Marionette, Handlebars, MyTemplate) { 
    
    var ViewMenu = Marionette.ItemView.extend({

    	tagName: "ul",
    	className: "off-canvas-list",
    	template: MyTemplate
    });
    return ViewMenu;
});