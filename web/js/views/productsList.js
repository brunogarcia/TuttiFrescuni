// Products List

define([
    //Load with require.js:
    'hbars!templates/products-list', 
    'views/product',
    'views/productDetails'],                
    function(TitlesTemplate, ProductView, ProductDetailsView) {

        var SeasonListView,
            productsScroll,
            maxProducts,
            productsHeight,
            totalFruits,
            totalVegetables;

        SeasonListView = Backbone.View.extend({

            tagName: "div",
            className: "products",

            events: {
                //If more info link has been activated
                "click .product-details-modal" : "productDetailsModal"
            },            

            render:function () {

                //create Titles
                var compiledFruitsTitle = TitlesTemplate({id: "fruits", title: "Frutas"}),
                    compiledVegetableTitle = TitlesTemplate({id: "vegetables", title: "Vegetales"});

                //append Titles to $el
                $(this.el).append(compiledFruitsTitle, compiledVegetableTitle);

                //for each product model
                this.collection.each(function (product) {

                    //load category of this product
                    this.category = {model: product.attributes.idCategory};

                    //append it on her own category's container
                    if (this.category.model === "2") {
                        $(this.el).find("#fruits > ul").append(new ProductView({model: product}).render().el);
                    } else {
                        $(this.el).find("#vegetables > ul").append(new ProductView({model: product}).render().el);
                    }


                }, this); //in this context
                
                //We've finished load all the images...
                Backbone.trigger("finishedLoadImages");

                return this;
            },

            //Launch modal with more info about the product
            productDetailsModal: function (e) {

                //Prevent trigger the default event
                e.preventDefault();

                //Save the idProduct of clicked link
                var idProduct = $(e.currentTarget).data("id");

                //Search the model
                this.collection.each(function(model) {
                    //If it's been found...
                    if (model.attributes.idProduct === idProduct.toString()) {

                        //Create the Product Details View
                        $('#details').html(new ProductDetailsView({model: model}).render().el);

                        return;
                    } 
                })
            },

            postRender: function() {

                setTimeout(function () {

                    //calculate values
                    totalFruits = $('#fruits > .productTotal').height();
                    totalVegetables = $('#vegetables > .productTotal').height();

                    //compare values
                    maxProducts = (totalFruits >= totalVegetables) ? totalFruits : totalVegetables;

                    //set product height
                    productsHeight = maxProducts + 100;

                    //apply height to scroller
                    $('#productsScroller').height(productsHeight);

                    //create scroll
                    productsScroll = new iScroll('wrapper');

                    }, 1000);

                // Remove spinner
                loading_spinner.stop();

                // Hide loading
                $("#loading").hide('slow');
            }

        });

        // Our module now returns our view
        return SeasonListView;
    });
