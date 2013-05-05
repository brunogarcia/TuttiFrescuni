// Products List

define([
    //Load with require.js:
    'text!templates/products-list.html',    //Template Title 
    'views/product',                        //View Product
    'views/productDetails'],                //View Product Detail 
    function(TitlesTemplate, ProductView, ProductDetailsView) {

        var SeasonListView = Backbone.View.extend({

            tagName: "div",
            className: "products",

            events: {
                //If more info link has been activated
                "click .more-info" : "moreInfo"
            },            

            render:function () {

                //create Titles
                var compiledFruitsTitle = _.template(TitlesTemplate, {id: "fruits", title: "Fruits"});
                var compiledVegetableTitle = _.template(TitlesTemplate, {id: "vegetables", title: "Vegetables"});

                //append Titles to $el
                $(this.el).append(compiledFruitsTitle, compiledVegetableTitle);

                //for each product model
                _.each(this.model.models, function (products) {

                    //load category of this product
                    this.category = {model: products.attributes.idCategory};

                    //append it on her own category's container
                    if (this.category.model === "2")
                        $(this.el).find("#fruits > ul").append(new ProductView({model: products}).render().el);
                    else
                        $(this.el).find("#vegetables > ul").append(new ProductView({model: products}).render().el);


                }, this); //in this context

                return this;
            },

            //Launch modal with more info about the product
            moreInfo: function (e) {

                //Prevent trigger the default event
                e.preventDefault();

                //Save the idProduct of clicked link
                this.idProduct = $(e.currentTarget).data("id");

                //Search the model
                for (var i = 0; i < this.model.models.length; i++) {

                    //If it's been found...
                    if (this.model.models[i].attributes.idProduct === this.idProduct.toString()) {

                        //Create the Product Details View
                        $('#details').html(new ProductDetailsView({model: this.model.models[i]}).render().el);
                    } 
                }                
            }

        });

        // Our module now returns our view
        return SeasonListView;
    });
