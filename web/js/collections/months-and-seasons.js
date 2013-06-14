//Collection Months and Seasons
define([
    "../models/months-and-seasons"],
    function(MonthsAndSeasonsModel) {
        var MonthsAndSeasonsCollection = Backbone.Collection.extend({
            model: MonthsAndSeasonsModel,

			initialize: function(options) {
            	options || (options = {});
            	this.idMonthsSeasons = options.idMonthsSeasons;
          	},

            url: function() {
            	return '/api/tutti.php/months/' + this.idMonthsSeasons;
            }
        });

    return MonthsAndSeasonsCollection;
});

