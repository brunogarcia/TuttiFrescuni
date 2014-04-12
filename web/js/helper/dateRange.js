// Utils: Get Date
define( [], function () {    
    var currentDate = new Date(),
        monthsList = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        date = {};
        
        date.getMonth = function(data) {
            var result = null;
            if (data.type === 'literal') {
                result = monthsList[currentDate.getMonth()];
            } else if (data.type === 'number') {
                result = currentDate.getMonth();
            }
            return result;
        };
        

    return date;
    
});




