define([
	'backbone',
	], function (Backbone){
	var Book=Backbone.Model.extend({
		defaults:{
			title:"Javascript The good parts",
			units:10,
			unitCost:20
		},

		initialize:function(){
		/*	console.log("A new book instance/model is created")*/
		},
	});

	return Book;
});