
define([
	'backbone',
	'backboneLocalstorage',
	'models/bookModel'
	], function (Backbone, Store, Book ){
		var BooksCollection=Backbone.Collection.extend({
			model:Book,
			localStorage: new Store("Books")
		});
		return BooksCollection;
	});