var baseObj = {
	id:"101",
	name:"magesh"
}
undefined

function Employee(salary){
	this.salary = salary;
}
undefined

Employee.prototype = baseObj;
Object {id: "101", name: "magesh"}
var e1 = new Employee(10000);
undefined

e1.salary
10000

var e2 = new Employee(20000);
undefined

e2.id
"101"

e2.salary
20000

e2.name
"magesh"

e2
Employee {salary: 20000, id: "101", name: "magesh"}

dir(e2)
Employee
salary: 20000
__proto__: Object
id: "101"
name: "magesh"
__proto__: Object
undefined

e1.name = "jigar";


baseObj.name = "Suresh"
"Suresh"

e1
Employee {salary: 10000, id: "101", name: "Suresh"}
e1.name
"Suresh"



/*\\\\*/

for(var member in baseObj){ console.log(baseObj[member]); }
101
chaitu
undefined
function Copy(srcObj, destObj){ for(var member in destObj){ console.log(srcObj.member); console.log(srcObj[member]); srcObj[member] = destObj[member]; } }
undefined
Copy(e3, baseObj);
ReferenceError: e3 is not defined
var e3={};
undefined
Copy(e3, baseObj);
undefined
undefined
undefined
undefined
undefined
e3
Object {id: 101, name: "chaitu"}


