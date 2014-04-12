define(['marionette', 'foundation'],
       function(Marionette) {
        
        var Tutti = new Marionette.Application();

        // Regions
        Tutti.addRegions({
            headerRegion: ".tab-bar",
            menuRegion: ".left-off-canvas-menu",
            mainRegion: ".main-section"
        });

        // Initialize: before
        Tutti.on("initialize:before", function() {
        });
        
        // Initialize: after
        Tutti.on("initialize:after", function() {

            // Launch Foundation JS
            $(document).foundation();

            // Commons: Menu & Header
            require(['app/commons'], function() {
                Tutti.request("commons");
            });

            // Main: Products
            require(['app/main'], function() {
                Tutti.request("products:all");
            });

        });
  
  return Tutti;
});
