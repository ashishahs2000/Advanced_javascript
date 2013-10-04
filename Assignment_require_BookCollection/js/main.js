require.config({

	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
	paths: {
		jquery: '../components/jquery/jquery-1.10.2',
		underscore: '../components/underscore/underscore',
		backbone: '../components/backbone/backbone',
		backboneLocalstorage: '../components/backbone.localStorage/backbone.localStorage',
		text: '../components/requirejs-text/text'
	}
});

require([
	'collections/bookCollection',
	'views/bookCollectionView'
	], function (BooksCollection, BookViewCollection){

		window.books=new BooksCollection();
		window.bookviewCollection=new BookViewCollection({collection:books})
		window.bookviewCollection.render();
		window.bookviewCollection.$el.appendTo(document.body);

	});