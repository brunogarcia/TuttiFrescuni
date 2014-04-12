define(['app', 
		    'model/literals', 
		    'view/header',
        'view/menu'], 
        function(Tutti, ModelLiterals, ViewHeader, ViewMenu) {

  Tutti.module("Literals", function(Literals, Tutti, Backbone, Marionette, $, _){
    
    var API = {

      getCommons: function(){
        var literals = new ModelLiterals();
        var defer = $.Deferred();

        literals.fetch({
          success: function(data){
            defer.resolve(data);
          }
        });

	    var promise = defer.promise();

        $.when(promise).done(function(literals){
            var viewHeader = new ViewHeader({'model': literals});
            var viewMenu = new ViewMenu({'model': literals});   

            Tutti.headerRegion.show(viewHeader);
            Tutti.menuRegion.show(viewMenu);
        });

        return ; 
      }  

    };

    Tutti.reqres.setHandler("commons", function(){
      return API.getCommons();
    });

  });

  return ;
});