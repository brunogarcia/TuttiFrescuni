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
            self,
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
                this.productsList = new ProductsCollection();

                //alphabeticical sorting by Name Product
                this.productsList.comparator = function(product) {
                    return product.get("nameProduct");
                }

                //avoid losing binding
                self = this;

                //fetch data Collection
                this.productsList.fetch({
                    success:function () {

                         //create Products List View
                        productsListView = new ProductListView({model: self.productsList});

                        //add Products List View to #content
                        $('#content').html(productsListView.render().el);

                     if(productsListView.postRender) {
                            productsListView.postRender();
                        };                        
                    }
                });





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

            // Remove spinner
            loading_spinner.stop();

            // Hide loading
            $("#loading").hide('slow'); 

            
        };

        return {
            initialize: initialize            
        };



    });





