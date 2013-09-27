var baseObj = {
	display : function(){
		console.log(this.id,this.name);
	}
}

function Employee(id,name){
	this.id = id;
	this.name = name;
}

Employee.prototype = baseObj;