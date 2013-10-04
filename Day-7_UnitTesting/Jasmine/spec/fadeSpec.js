describe("Asynchronous specs", function(){
	it("should support asynch execution", function(){
		//arrange
		var newdom = document.createElement('div');
		var flag = false, value = 0; 
		runs(function(){
			fadeOut(newdom,500,function(){
				this.remove(); });
			flag = true;
		});

		waitsFor(function() {
        value++;
        return flag;
      }, "The Value should be incremented", 1000);
      runs(function() {
          expect(value).toBeGreaterThan(0);
      }); 
	});

  it(" magesh__ :should fade out the given DOM node within the given time interval",function(){

    //arrange
      var domNode = document.createElement("div"),
        duration = 2000,
        callback = jasmine.createSpy("fadeOutCallback");
    //act
      runs(function(){
        fadeOut(domNode,duration,callback);
      });

    //assert
      waitsFor(function(){
        return domNode.style.opacity == 0;
      },"FadeOut Operation output", duration + 100);

  });




});