define([
	'jquery',
	'underscore',
	'backbone',
	'text!tempelates/tempelate.html',
	'views/bookModelView'
	], function ($, _, Backbone, htmltext, BookView){
	var BookViewCollection=Backbone.View.extend({
		
		tagName:"table",
		initialize:function(){
			this.listenTo(this.collection,"all",this.render);
			this.compiledtemplateid=_.template(htmltext);
			/*console.log(this.compiledtemplateid());*/
		},
		events:{
			"click input:button":"addbook"
		},
		addbook:function(){
			var obj={title:this.$("#txtTitle").val(),
					units:this.$("#txtUnits").val(),
					unitCost:this.$("#txtUnitCost").val()}	
			this.collection.create(obj)
			this.render();
		},
		render:function(evt){
		this.$el.html('');
		this.$el.append(this.compiledtemplateid())
		var result="";	
		for(i in this.collection.models)
		{
			this.$el.append(new BookView({model:this.collection.models[i]}).render().$el);
		}
		/*console.log("I am here to load the template")*/
		}

	});

	return BookViewCollection;
});