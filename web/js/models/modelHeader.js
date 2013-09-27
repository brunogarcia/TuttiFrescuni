// Model Header
define( ['utils/getDate', 'backbone'], function (Date) {
    
    var HeaderModel = Backbone.Model.extend({
        defaults:{
            'month': Date.getMonth({'type': 'literal'})
        }
    });
    
    return HeaderModel;
});


