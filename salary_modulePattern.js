

function Calculator(){
  var _basic = document.getElementById('basic').value
    , _hra = document.getElementById('hra').value
    , _da = document.getElementById('da').value
    , _tax= document.getElementById('tax').value;
  function getNet(){
    return parseInt(_basic) + parseInt(_hra) + parseInt(_da);
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

}
document.getElementById('calculat').onclick = function(){
  Calculator();
document.getElementById('gross').value = Calculator().calculate();
}

/*calculator.basic(document.getElementById('basic').value);*/