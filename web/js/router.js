// Router
// The routes object contains a list of patterns being watched by the router,
// and which function to execute when a match is made.
define([
    'collections/products',
    'views/header',
    'views/productsList',
    'views/footer'],
    function(ProductsCollection, HeaderView, ProductListView, FooterView) {

        var AppRouter,
            initialize;
    
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

                //avoid losing binding
                var self = this;

                //fetch data Collection
                this.productsList.fetch({
                    success:function () {
                        //create Products List View and add them to #content
                        $('#content').html(new ProductListView({model: self.productsList}).render().el);
                    }
                });
            }

        });

        initialize = function() {
            var app_router = new AppRouter;
            Backbone.history.start();
        };

        return {
            initialize: initialize
        };

    });





