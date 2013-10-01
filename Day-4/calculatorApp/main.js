require.config({
		paths : {
			jquery : 'jquery-1.10.2'
		}
	});

require(['jquery','calculator','CalculatorView'], function(CalculatorView){
			calculatorView.init()
		} )