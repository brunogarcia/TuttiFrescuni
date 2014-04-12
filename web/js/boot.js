// Require.js configuration options
// http://requirejs.org/docs/api.html#config
requirejs.config({


    'baseUrl': 'bower_components',

    'paths': {

        'jquery': 'jquery/dist/jquery',
        'underscore': 'underscore/underscore',

        'backbone': 'backbone/backbone',
        'marionette': 'marionette/lib/backbone.marionette',

        'foundation': 'foundation/js/foundation',

        'Handlebars': 'handlebars/handlebars',
        'text': 'requirejs-text/text',
        'hbars': 'require-handlebars/hbars',

        'app': '../js/app',
        'collection': '../js/collection',
        'model': '../js/model',
        'view': '../js/view',
        'helper': '../js/helper',
        'template': '../template'

        /*'highcharts-base': 'vendor/highcharts',
        'highcharts-exporting': 'vendor/highchartsExporting',  
        'highcharts': 'vendor/highchartsOptions',*/
    },

    'shim': {

        'foundation': {
            'deps': ['jquery'],
            'exports': "foundation"
        },        

        'backbone': {
            'deps': ['underscore'],
            'exports': "Backbone"
        },
        
        'marionette': {
            'deps': ['backbone'],
            'exports': 'Marionette'
        },

        'Handlebars': {
            'exports': 'Handlebars'
        }        
    },

    'hbars': {
        'extension': '.hbs'
    },

});

require(['app'], function(App){
    App.start();
});