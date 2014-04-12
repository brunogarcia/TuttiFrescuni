define(['Handlebars'], function (Handlebars) {

	//http://handlebarsjs.com/block_helpers.html
	var ListHelper = function (context, options) {
	  var ret = "";

	  for(var i=0, j=context.length; i<j; i++) {
	    ret += options.fn(context[i]);
	  }

	  return ret;
	}    

    Handlebars.registerHelper('list', ListHelper);
    return new Handlebars.SafeString(ListHelper);
});

