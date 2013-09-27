function Calculate(basic, hra, da, tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	var netSal = ( function getnet(){
			return (basic + hra + da);
		}());
	this.gross = function (){
		return (netSal - tax);
	}
}




///////
var calculator = (function(){
  var _basic = 0
    , _hra = 0
    , _da = 0
    , _tax= 0;
  function getNet(){
    return _basic + _hra + _da;
  }
  return {
    basic : function(){
      if(arguments.length ==0) return _basic;
      _basic = arguments[0];
    },
    hra : function(){
      if(arguments.length ==0) return _hra;
      _hra = arguments[0];
    },
    da : function(){
      if(arguments.length ==0) return _da;
      _da = arguments[0];
    },
    tax : function(){
      if(arguments.length ==0) return _tax;
      _tax = arguments[0];
    },
    calculate : function(){
      return getNet() * ((100 - _tax)/100);
    }
  }
}())



calculator.calculate()
0
calculator.basic(100)
undefined
calculator.hra(10)
undefined
calculator.da(5)
undefined
calculator.tax(1)
undefined
calculator.calculate()
113.85

