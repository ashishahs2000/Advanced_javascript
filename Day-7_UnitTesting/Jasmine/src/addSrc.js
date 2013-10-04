function Add(){
	this.add = function(){
		if(arguments.length == 0)
			this.result = 0;

		/*if(arguments.length == 1)
			this.result = arguments[0];

		if(arguments.length == 2)
			this.result = arguments[0] + arguments[1];*/


		if(arguments.length > 0){
			this.result = (function(arg){
				var resul = 0;
				for(var i=0; i<arg.length; i++){
					resul += arg[i];
				}
				return resul;
			})(arguments);
		}

		if(instanceof array){
			this.result = (function(){
				for(var i=0; i<array.length; i++)
					//
			}())
		}
	}
}