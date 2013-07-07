//Collection Photo Credits

define([
    "../models/photoCredits"],
    function(PhotoCreditsModel) {
        var photoCreditsCollection = Backbone.Collection.extend({
            model: PhotoCreditsModel,
            url: "api/tutti.php/credits"
        });

    return photoCreditsCollection;
});

