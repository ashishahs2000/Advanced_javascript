var product = {
	id : 100,
	name : "Pen",
	cost : 10
}
undefined
product.category = 123;
123
product
Object {id: 100, name: "Pen", cost: 10, category: 123}
product.cost = 110;
110
product
Object {id: 100, name: "Pen", cost: 110, category: 123}
product.Catagory = 200;
200
product
Object {id: 100, name: "Pen", cost: 110, category: 123, Catagory: 200}
delete product.Catagory;
true
product
Object {id: 100, name: "Pen", cost: 110, category: 123}
delete product.Catagory;
true

//if you use .cost notation , then intension is modifieng value
//if ["cost"] is used, it is notating adding of attribute

product["cost"] = 210;
210
product
Object {id: 100, name: "Pen", cost: 210, category: 123}
product["Cost"] = 210;
210
product
Object {id: 100, name: "Pen", cost: 210, category: 123, Cost: 210}


for(var member in product){
   console.log(member);
}
id
name
cost
category
Cost
undefined


for(var member in product){
   console.log(product[member]);
}
100
Pen
210
123
210
undefined

//


product["whoAreYou"] = function(){
 console.log("I am a " + product.name + " with the value " + product.cost);
}
function (){
 console.log("I am a " + product.name + " with the value " + product.cost);
}
product.whoAreYou();
I am a Pen with the value 210
undefined


//


function whoAreYouFn(){
 console.log("I am a " + product.name + " with the value " + product.cost);
}
undefined
var p2 = {id:100, name: "pencil", cost:10, whoAreYou: whoAreYouFn}
undefined
p2.whoAreYou
function whoAreYouFn(){
 console.log("I am a " + product.name + " with the value " + product.cost);
}
p2.whoAreYou()
I am a Pen with the value 210
undefined

//"this" is invokation context
function whoAreYouFn(){
 console.log("I am a " + this.name + " with the value " + this.cost);
}
undefined
p2.whoAreYou()
I am a Pen with the value 210
undefined
var p2 = {id:100, name: "pencil", cost:10, whoAreYou: whoAreYouFn}
undefined
p2.whoAreYou()
I am a pencil with the value 10
undefined
product.whoAreYou()
I am a Pen with the value 210
undefined


//

function createProuct(id,name,cost){
 return {id : id, name : name, cost:cost, whoAreYou : whoAreYouTemplateFn} 
}
undefined
var Pen = createProuct(100, Pen, 10 );
ReferenceError: whoAreYouTemplateFn is not defined
var Pen = createProuct(100, "Pen", 10 );
ReferenceError: whoAreYouTemplateFn is not defined
var Pen = createProuct(100, "Pen", 10);
ReferenceError: whoAreYouTemplateFn is not defined
function createProuct(id,name,cost){
 return {id : id, name : name, cost:cost, whoAreYou : whoAreYouFn} 
}
undefined
var Pen = createProuct(100, "Pen", 10);
undefined
Pen.whoAreYou
function whoAreYouFn(){
 console.log("I am a " + this.name + " with the value " + this.cost);
}
Pen.whoAreYou()
I am a Pen with the value 10
undefined
var phone = createProuct(101, phone, 250);
undefined
phone.whoAreYou()
I am a undefined with the value 250
undefined
var phone = createProuct(101, "nexus", 250);
undefined
phone.whoAreYou()
I am a nexus with the value 250
undefined

//



//constructor function


var obj = {}
undefined
obj
Object {}
typeof Object
"function"
Object
function Object() { [native code] }
obj.constructor
function Object() { [native code] }
phone.constructor
function Object() { [native code] }


Number
function Number() { [native code] }
Date
function Date() { [native code] }
Boolean
function Boolean() { [native code] }
Function
function Function() { [native code] }
String
function String() { [native code] }


function Product(id, name, cost){
 this.id = id;
 this.name = name;
 this.cost = cost;
}
undefined
var laptop = new Product("9093", "Laptop", 50000);
undefined
laptop
Product {id: "9093", name: "Laptop", cost: 50000}

laptop.constructor
function Product(id, name, cost){
 this.id = id;
 this.name = name;
 this.cost = cost;
}


//

var desktop = Product("9094", "Desktop", 40000);
undefined
desktop
undefined
Product
function Product(id, name, cost){
 this.id = id;
 this.name = name;
 this.cost = cost;
}
window
Window {top: Window, window: Window, location: Location, external: Object, chrome: Object…}
window.id
"9094"
window.name
"Desktop"
window.cost
40000


// no matter if constructor function is called with or without "new"
function Product(id, name, cost){
 if(this.constructor.name != "Product"){
  return new Product(id,name,cost);
 }
 this.id = id;
 this.name = name;
 this.cost = cost;
}
undefined
var desktop =Product("9094", "Desktop", 40000);
undefined
desktop
Product {id: "9094", name: "Desktop", cost: 40000}


//

function Product(id, name, cost){
	if(this.constructor.name != "Product"){
		return new Product(id,name,cost); 
	} if(cost<0) {
		throw new Error("Invalid Cost"); 
	} 
	this.id = id; 
	this.name = name; 
	var _cost =cost; 
	this.getCost = function(){
		return _cost; 
	};
	this.setCost = function(cost){
		if(cost<0){
			throw new Error("Invalid cost") };
			_cost = cost;
		};
	} 

	function Product(id, name, cost){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost); 
	} if(cost<0) {
		throw new Error("Invalid Cost"); 
	} 
	this.id = id; 
	this.name = name; 
	var _cost =cost; 
	this.getCost = function(){
		return _cost; 
	};
	this.setCost = function(cost){
		if(cost<0){
			throw new Error("Invalid cost") };
			_cost = cost;
		};
	} 
undefined

var bag = new Product("612","backpack",2000)
undefined
bag.cost
undefined
bag.getCost
function (){
		return _cost; 
	}
bag.getCost()
2000
bag.setCost(1000)
undefined
bag.getCost()
1000

//final
function Product(id, name, cost){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost); 
	}
	this.id = id; 
	this.name = name; 
	var _cost; 
	this.getCost = function(){
		return _cost; 
	};
	this.setCost = function(cost){
		if(cost<0){
			throw new Error("Invalid cost") };
			_cost = cost;
		};
    this.setCost(cost);
	} 
undefined






function Product(id, name, cost){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost); 
	}
	this.id = id; 
	this.name = name; 
	var _cost; 
	/*this.getCost = function(){
		return _cost; 
	};*/
	this.Cost = function(cost){
		if(typeof(cost)=="undefined"){
			return _cost;
		}
		else
			if(cost<0){
				throw new Error("Invalid cost") };
				_cost = cost;
			};
	this.Cost(cost);

   }


   //

   function Product(id, name, cost, units){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost,units); 
	}
	this.id = id; 
	this.name = name; 
	var _cost; 
	this.Cost = function(cost){
		if(typeof(cost)=="undefined"){
			return _cost;
		}
		else
			if(cost<0){
				throw new Error("Invalid cost") };
				_cost = cost;
			};
	this.Cost(cost);

	var _units; 
	this.Units = function(units){
		if(typeof(units)=="undefined"){
			return _units;
		}
		else
			if(units<0){
				throw new Error("Invalid units") 
			};
			_units = units;
	};
	this.Units(units);

   }



function Order(){
	var _list = [];
	this.addProduct = function(product){
		_list.push(product);
	};
	this.value = function(){
		var result =0;
		for(var i=0; i<_list.length;i++){
			result += _list[i].units() * _list[i].cost;
		}
		return result;
	}
}

/////////////

   function Product(id, name, cost, units){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost,units); 
	}
	this.id = id; 
	this.name = name; 
	var _cost; 
	this.Cost = function(cost){
		if(typeof(cost)=="undefined"){
			return _cost;
		}
		else
			if(cost<0){
				throw new Error("Invalid cost") };
				_cost = cost;
			};
	this.Cost(cost);

	var _units; 
	this.Units = function(units){
		if(typeof(units)=="undefined"){
			return _units;
		}
		else
			if(units<0){
				throw new Error("Invalid units") 
			};
			_units = units;
	};
	this.Units(units);

   }



function Order(){
	var _list = [];
	this.addProduct = function(product){
		_list.push(product);
		if (typeof this.onProductAdded === "function")
			this.onProductAdded(product);
	};
	this.value = function(){
		var result =0;
		for(var i=0; i<_list.length;i++){
			result += _list[i].units() * _list[i].cost;
		}
		return result;
	}
}

var order = new Order()
undefined
order.addProduct(new Product(101,"Pen",1,1))
undefined
order.onProductAdded = function(newProduct){ console.log("A new product with name " + newProduct.name + "is added"); } 
function (newProduct){ console.log("A new product with name " + newProduct.name + "is added"); }
order.addProduct(new Product(101,"Pen",1,1))
A new product with name Penis added
undefined



////////////////
   function Product(id, name, cost, units){
	if(this.constructor.name != arguments.callee.name){
		return new Product(id,name,cost,units); 
	}
	this.id = id; 
	this.name = name; 
	var _cost; 
	this.Cost = function(cost){
		if(typeof(cost)=="undefined"){
			return _cost;
		}
		else
			if(cost<0){
				throw new Error("Invalid cost") };
				_cost = cost;
			};
	this.Cost(cost);

	var _units; 
	this.Units = function(units){
		if(typeof(units)=="undefined"){
			return _units;
		}
		else
			if(units<0){
				throw new Error("Invalid units") 
			};
			_units = units;
	};
	this.Units(units);

   }



function Order(){
	var _list = [];

	this.addProduct = function(product){
		if(!this instanceof Product){
			return(new Product "this.product");}
			else{
		_list.push(product);
		if (typeof this.onProductAdded === "function")
			this.onProductAdded(product); }
	};
	this.value = function(){
		var result =0;
		for(var i=0; i<_list.length;i++){
			result += _list[i].units() * _list[i].cost;
		}
		return result;
	}
}
