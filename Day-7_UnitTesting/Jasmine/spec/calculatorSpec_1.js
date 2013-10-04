describe("SalaryCalculator",function(){
  it("triggerSalaryChange function is working",function(){

    //Arrange
    calculator.basic(10000);
    calculator.hra(10000);
    calculator.da(1000);
    calculator.tax(10);

    //substitue a test double for "SalaryChanged" susbscriber

    var isSubscriberCalled = false;

    function testDoubleCallback(){
      isSubscriberCalled = true;
    }
    calculator.subscribeSalaryChange(testDoubleCallback); 

    //Act
    calculator.calculate();

    //Assert
    expect(true).toEqual(isSubscriberCalled);


  });

   it("triggerSalaryChange is working", function(){

      //Arrange

      calculator.basic(10000);
      calculator.hra(10000);
      calculator.da(1000);
      calculator.tax(10);

      var spyObj = jasmine.createSpy("salaryChanged");

      /*var callbackObj = {

        salaryChanged : function(){}

      }
      spyOn(callbackObj,"salaryChanged");*/
      /*calculator.subscribeSalaryChange(callbackObj.salaryChanged);*/
      calculator.subscribeSalaryChange(spyObj);
      
      //Act
      calculator.calculate();
      
      //Assert
      /*expect(callbackObj.salaryChanged).toHaveBeenCalled();*/
      expect(spyObj).toHaveBeenCalled();
    });

});
