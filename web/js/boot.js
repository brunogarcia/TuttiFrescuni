// Require.js configuration options
// http://requirejs.org/docs/api.html#config
requirejs.config({
    paths: {
        'backbone': 'vendor/backbone',
        'underscore': 'vendor/underscore.min',
        'jquery': 'vendor/jquery',
        'jquerymobile': 'vendor/jquery.mobile',
        'marionette': 'vendor/backbone.marionette',
        'Handlebars': 'vendor/handlebars.min',        
        'text': 'vendor/require/text.min',
        'json': 'vendor/require/json.min',
        'bsTransition': 'vendor/bootstrap/bootstrap-transition.min',
        'bsModal': 'vendor/bootstrap/bootstrap-modal.min',  
        'spin': 'vendor/utils/spin.min',
        'jQuerySpin': 'vendor/utils/jquery.spin',
        'templates': '../templates'
    },
    shim: {
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': "Backbone"
            },
        'marionette': {
            'deps': ['backbone'],
            'exports': 'Marionette'
            },
        'Handlebars': {
            'exports': 'Handlebars'
            },
        'bsTransition': ['jquery'],
        'bsModal': ['jquery'],            
        'jQuerySpin': {
            'deps': ['spin', 'jquery']
        }
    }
});

require(['app'], function(TuttiFrescuni){
    TuttiFrescuni.start();
});