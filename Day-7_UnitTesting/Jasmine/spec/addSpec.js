describe("Add", function(){
	it("show 0 if nothing is passed", function(){
		//Arrange
		var add = new Add(),
			addResult = 0;
		//Act
		add.add();
		//Assert
		expect(addResult).toEqual(add.result);
	});

	it("show number if single number is passed", function(){
		//Arrange
		var add = new Add(),
			num = 10,
			addResult = 10;
		//Act
		add.add(num);
		//Assert
		expect(addResult).toEqual(add.result);
	});

	it("show another number if single number is passed", function(){
		//Arrange
		var add = new Add(),
			num = 12, 
			addResult = 12;
		//Act
		add.add(num);
		//Assert
		expect(addResult).toEqual(add.result);
	});

	it("add number if two numbers are passed", function(){
		//Arrange
		var add = new Add(),
			num1 = 10,
			num2 = 25,
			addResult = 35;
		//Act
		add.add(num1,num2);
		//Assert
		expect(addResult).toEqual(add.result);
	});

	it("add number if n numbers are passed", function(){
		//Arrange
		var add = new Add(),
			num1 = 10,
			num2 = 25,
			num3 = 10,
			addResult = 45;
		//Act
		add.add(num1,num2,num3);
		//Assert
		expect(addResult).toEqual(add.result);
	});

	it("array of n numbers is passed", function(){
		//Arrange
		var add = new Add(),
			array = [1,2,3,5,6,10]
			addResult = 27;
		//Act
		add.add(array);
		//Assert
		expect(addResult).toEqual(add.result);
	});
})