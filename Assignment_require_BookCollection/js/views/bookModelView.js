define([
	'jquery',
	'backbone'
	], function ($, Backbone){
	var BookView=Backbone.View.extend({
	
		initialize:function(){
			this.listenTo(this.model,"all",this.render);
		},
		render:function(){
			var result=""
			/*console.log("render triggered");*/
			mybook=this.model;
			result+="<tr><td>" + mybook.attributes.title + "</td><td>" + mybook.attributes.units + "</td><td>" + mybook.attributes.unitCost + "</td><td> <input type='button' value='Delete'></td></tr>"
			this.$el.html(result);
			return this;
			
		},

		events:{
			"click input:button":"delBook"
		},
		delBook:function(){
		/*	console.dir(this.model)*/
			this.model.destroy();
			this.render();
		}
		});
	return BookView;
});