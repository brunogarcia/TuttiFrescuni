({
    baseUrl: "./js",
	paths: {
        jQuery: 'libs/jquery-1.9.1.min',
        Underscore: 'libs/underscore.min',
        Backbone: 'libs/backbone.min',        
        Handlebars: 'libs/handlebars.min',        
        text: 'libs/text.min',
        hbars: 'libs/hbars.min',
        templates: '../templates',
        json: 'libs/json.min',
        bootstrapTransition: 'libs/bootstrap/bootstrap-transition.min',
        bootstrapModal: 'libs/bootstrap/bootstrap-modal.min',  
        iScroll: 'libs/iscroll.min'
    },
      shim: {
        Handlebars: {exports: 'Handlebars'},
        'Backbone': ['Underscore', 'jQuery'],
        'bootstrapTransition': ['jQuery'],
        'bootstrapModal': ['jQuery'],
        'iScroll': ['jQuery'],
        'app': ['Backbone', 'bootstrapTransition', 'bootstrapModal', 'iScroll']
    },  
    name: "boot",
    out: "js/boot-built.js"
})