	function fadeOut(node,duration,callback){
		var timerHandle = 0;
		if (node.style.opacity == "") node.style.opacity = 1;
		
		function reduceOpacity(){
			var opacity = node.style.opacity - 0.05;
			node.style.opacity = opacity;
			if(opacity < 0){
				node.style.opacity = 0;
				callback.call(node);
			}
		}
		function blockDisplay(){
			node.style.opacity = 0;
			callback.call(node);
		}
		/*timerHandle = setInterval(reduceOpacity,(duration/20));*/
		timerHandle = setTimeout(blockDisplay,duration);
	}
