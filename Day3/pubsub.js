var eventBus = (function(){
  var subscribers = {};
  function subscribe(eventName,subscription){
    if(!subscribers[eventName])
      subscribers[eventName] = [];
    subscribers[eventName].push(subscription);
  }

  function publish(eventName,arg,context){
    if(!context) context = this;
    if(subscribers[eventName]){
      var subscriptions = subscribers[eventName];
      for(var i=0;i<subscriptions.length;i++)
        subscriptions[i].call(context,arg);
    }
  }
  return {
    subscribe : subscribe,
    publish : publish,
  }

}());


//console
/*
eventBus.subscribe("eventBusImplimented", function(arg){
 	console.log("eventBus implemented at " + arg);
	})
undefined

eventBus.publish("eventBusImplimented",new Date());

eventBus implemented at Sat Sep 28 2013 15:52:05 GMT+0530 (India Standard Time)

undefined


*/