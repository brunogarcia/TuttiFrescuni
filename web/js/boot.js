// Require.js Configuration Options
//http://requirejs.org/docs/api.html#config
require.config({

    //Path alias and routes
    paths: {
        'jQuery': 'libs/jquery-1.9.1.min',
        'Underscore': 'libs/underscore.min',
        'Backbone': 'libs/backbone.min',
        'text': 'libs/text.min',
        'templates': '../templates',
        'bootstrapTransition': 'libs/bootstrap/bootstrap-transition.min',
        'bootstrapModal': 'libs/bootstrap/bootstrap-modal.min',  
        'iScroll': 'libs/iscroll.min',
    },
    //Configure the dependencies and exports for older,
    //traditional "browser globals" scripts that do not use define()
    //to declare the dependencies and set a module value.
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'bootstrapTransition': ['jQuery'],
        'bootstrapModal': ['jQuery'],
        'iScroll': ['jQuery'],
        'app': ['Backbone', 'bootstrapTransition', 'bootstrapModal', 'iScroll']
    }
});

// Load our app module and pass it to our definition function
require(['app'], function(App){

    // The "app" dependency is passed in as "App"
    App.initialize();
});