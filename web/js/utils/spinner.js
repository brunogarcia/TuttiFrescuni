define(['marionette', 'jQuerySpin'], function(Marionette) {

    var Spinner = Marionette.ItemView.extend({

        id: 'spinner',

        render: function() {
            this.$el.spin('large', '#333');
        }

    });

    return Spinner;

});