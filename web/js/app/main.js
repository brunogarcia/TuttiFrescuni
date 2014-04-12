define(['app', 
        'collection/products', 
        'view/main'], 
        function(Tutti, CollectionProducts, ViewMain){

  Tutti.module("Entities", function(Entities, Tutti, Backbone, Marionette, $, _){
    
    var API = {
      getAll: function(){
        var products = new CollectionProducts();
        var defer = $.Deferred();

        products.fetch({
          success: function(data){
            defer.resolve(data);
          }
        });

        var promise = defer.promise();

        $.when(promise).done(function(products){
            var viewMain = new ViewMain({'collection': products});

            Tutti.mainRegion.show(viewMain);
        });

        return ;
        
      },

      getFruits: function(){},

      getVegetables: function(){}    

    };

    Tutti.reqres.setHandler("products:all", function(){
      return API.getAll();
    });

    Tutti.reqres.setHandler("products:fruits", function(){
      return API.getFruits();
    });

    Tutti.reqres.setHandler("products:vegetables", function(){
      return API.getVegetables();
    });
    
  });

  return ;
});