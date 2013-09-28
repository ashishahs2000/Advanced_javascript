function add(){
  function parseArg(n){
    if(typeof n === "string") return parseInt(n,10);
    if(typeof n === "function") return parseArg(n());
    return n;
    if(n instanceof Array) return add.apply(this,n);
    return n;
  }

  var result = 0;
  for(var i=0; i<arguments.length;i++)
    result += parseArg(arguments[i]);
    return result;
}



/// 
function add(){
	function parseArg(){
		if (typeof n === "string") return parseInt(n,10);
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this, n);
		return n;
	}
	return arguments.length === 1 ? parseArg(arguments[0]) : parseArg(arguments[0] + add.apply(this,Array.prototype.splice.call(arguments,1)));
}


add([1,"2",[3,4]])
