var empClasses = {
	FTE : function FullTimeEmployee(id,name){
		this.id = id;
		this.name = name;
		this.type = "FullTimeEmployee";
	},

	CTE : function ContractEmployee(id,name){
		this.id = id;
		this.name = name;
		this.type = "ContractEmployee";
	}
};

function EmployeeFactory(){
	this.createEmployee = function(id,name,type){
		/*if(type == "FullTimeEmployee"){
			return new FullTimeEmployee(id,name);
		}

		if(type == "ContractEmployee"){
			return new ContractEmployee(id,name);
		}*/

		return new empClasses[type](id,name);	
	}
}