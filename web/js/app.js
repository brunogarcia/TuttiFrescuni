define(['marionette', 'utils/spinner',
        'collections/collectionProducts', 'views/viewHeader', 'views/viewProducts', 'views/viewFooter',],
       function(Marionette, Spinner, ProductsCollections, HeaderView, ProductsView) {
        
        var TuttiFrescuni = new Marionette.Application(),
            headerView = new HeaderView(),
            footerView = new FooterView(),
            snipper = new Spinner(),
            productsCollection = new ProductsCollections(),
            initializeBefore = null,
            initializeAfter = null;
    
        productsCollection.fetch();
    
        TuttiFrescuni.addRegions({
            headerRegion: "#header-region",
            mainRegion: "#main-region",
            toolbarRegion: "#toolbar-region"
        });
        
        TuttiFrescuni.on("initialize:before", function(){            
            
            initializeBefore = new Date().getMilliseconds();            
            
            TuttiFrescuni.mainRegion.show(snipper);                        
        });
        
        TuttiFrescuni.on("initialize:after", function(){            
            
            TuttiFrescuni.headerRegion.show(headerView);
            TuttiFrescuni.toolbarRegion.show(footerView);
            
            productsView = new ProductsView({
                collection: productsCollection
            });

            TuttiFrescuni.mainRegion.show(productsView);
            
            snipper.remove();
            
            initializeAfter = new Date().getMilliseconds();
            console.log("Time to render: " + (initializeAfter - initializeBefore) + " milliseconds");
            
            
        });
  
  return TuttiFrescuni;
});