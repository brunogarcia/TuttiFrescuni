// Models Months and Seasons
define( [], function ( ) {
    var MonthsAndSeasons = Backbone.Model.extend({
        defaults:{
            "CodMes": "",
            "CodRecogida":""
        }
    });
    return MonthsAndSeasons;
});

