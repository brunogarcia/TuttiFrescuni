// Backbone.Router provides methods for routing client-side pages, 
// and connecting them to actions and events.
define([
    'collections/products',
    'views/header',
    'views/productsList',
    'views/footer'],
    function(ProductsCollection, HeaderView, ProductListView, FooterView) {

        var AppRouter,
            app_router,
            initialize,
            productsListView;            
    
        // Create Router
        AppRouter = Backbone.Router.extend({

            routes:{
                "": "loadProducts"
            },

            initialize:function () {
                //Render the Header and Footer
                $('#header').html(new HeaderView().render().el);
                $('#footer').html(new FooterView().render().el);
            },

            loadProducts:function () {
                //create a new Collection
                var productsCollection = new ProductsCollection();

                //fetch data Collection
                productsCollection.fetch({

                    success:function () {

                         //create View
                        productsListView = new ProductListView({collection: productsCollection});

                        //add View to #content
                        $('#content').html(productsListView.render().el);                                              
                    }
                }, this);
            }

        });

        initialize = function() {
            app_router = new AppRouter;

            /* When all of your Routers have been created, 
                and all of the routes are set up properly, 
                call Backbone.history.start() to begin monitoring hashchange events, 
                and dispatching routes.
            */
            Backbone.history.start();

            //When finished load images...
            Backbone.on("finishedLoadImages", function() {
                // Create iScroll
                productsListView.postRender();
            });
            
        };

        return {
            initialize: initialize            
        };
        
    });





