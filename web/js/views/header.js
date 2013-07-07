// Header: logo
define([
    'hbars!templates/header'],
    function(HeaderTemplate) {

        //Get current month
        var currentDate = new Date();
        var currentMonthId = currentDate.getMonth();

        if (currentMonthId === 0) currentMonth = "Enero";
        else if (currentMonthId === 1) currentMonth = "Febrero";
        else if (currentMonthId === 2) currentMonth = "Marzo";
        else if (currentMonthId === 3) currentMonth = "Abril";
        else if (currentMonthId === 4) currentMonth = "Mayo";
        else if (currentMonthId === 5) currentMonth = "Junio";
        else if (currentMonthId === 6) currentMonth = "Julio";
        else if (currentMonthId === 7) currentMonth = "Agosto";
        else if (currentMonthId === 8) currentMonth = "Septiembre";
        else if (currentMonthId === 9) currentMonth = "Octubre";
        else if (currentMonthId === 10) currentMonth = "Noviembre";
        else currentMonth = "Diciembre";

        //Header View
        var HeaderView = Backbone.View.extend({

            tagName: "div",
            className: "container",            

            initialize:function () {
                this.render();
            },

            render:function () {
                var headerTemplate = HeaderTemplate({month: currentMonth});
                $(this.el).html(headerTemplate);
                return this;
            }
        });

        return HeaderView;
});


