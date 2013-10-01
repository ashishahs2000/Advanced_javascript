var Book = Backbone.Model.extend({
  url : "books",
  defaults : {
     id : -1,
     title : "<No title Yet>",
     units : 10,
     unitCost :0
  },
  initialize : function(){
    console.log("a new Book model instance is created");
  }
});


var b = new Book();

console.log(b.get("id"));

var b = new Book({
  title : "this is book"
});
//
console.log(b.get("id"));
//
var book = new Book({id:10});
book.fetch();
//
b.on("change", function(){ console.log("book has changed -", arguments[0].get("title"));});
b.set("title","a new title - 2");
//

book.on({
  'change:title' : function(){console.log("title changed");},
  'change:price' : function(){console.log("price changed");}
});

book.set("title","xyz");
book.set("price","100");

//
Backbone.sync = function(method,object,option){
  console.log("method = " + method);
  console.log("method = " + method);
  
}
