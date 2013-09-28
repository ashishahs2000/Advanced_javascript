	function ADD(x){
		if( x instanceof Array){
			var tot_A =0;
			for(var i=0; i<x.length; i++){
				console.log(x[i]);
				tot_A = x[i] + tot_A;
			}
			return tot_A;
		}}
		/*if( typeof x = number){
			tot_S = parseInt(x);
		}*/
	}