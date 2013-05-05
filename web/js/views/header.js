// Header: logo
define([
    'text!templates/header.html'],
    function(HeaderTemplate) {

        //Get current month
        var currentDate = new Date();
        var currentMonthId = currentDate.getMonth();

        if (currentMonthId === 1) currentMonth = "January";
        else if (currentMonthId === 2) currentMonth = "February";
        else if (currentMonthId === 3) currentMonth = "March";
        else if (currentMonthId === 4) currentMonth = "April";
        else if (currentMonthId === 5) currentMonth = "May";
        else if (currentMonthId === 6) currentMonth = "June";
        else if (currentMonthId === 7) currentMonth = "July";
        else if (currentMonthId === 8) currentMonth = "August";
        else if (currentMonthId === 9) currentMonth = "September";
        else if (currentMonthId === 10) currentMonth = "October";
        else if (currentMonthId === 11) currentMonth = "November";
        else currentMonth = "December";

        //Header View
        var HeaderView = Backbone.View.extend({

            tagName: "div",
            className: "container",            

            initialize:function () {
                this.render();
            },

            render:function () {
                var headerTemplate = _.template(HeaderTemplate, {month: currentMonth});
                $(this.el).html(headerTemplate);
                return this;
            }
        });

        return HeaderView;
});


