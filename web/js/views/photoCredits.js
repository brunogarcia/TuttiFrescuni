// Credits

define(['views/photoCredit'],                
    function(PhotoCreditsView) {        

        var CreditsView = Backbone.View.extend({

            tagName: "ul",
            className: "photo-credits",            

            render: function() {


                //avoid losing binding
                self = this;

                //fetch data Collection
                this.photoCredits.fetch({
                    success:function () {

                         //create View
                        var photoCreditsView = new PhotoCreditsView({model: self.photoCredits});

                        console.log(photoCreditsView);
                        //add View to #content
                       this.$el.html(photoCreditsView);
                    }
                });                    
            }
        });

        // Our module now returns our view
        return CreditsView;
    });
