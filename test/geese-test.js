window.geesetests = {

	testOneIncrementAboveAcceptedRange: function () {
		try {
			var result = calculateTransportCost(null, MAXIMUM_NUMBER_OF_GEESE+1);	
		} catch (err) {
			if (err !== "numGeese greater than maximum") throw "Failed Test - testOneIncrementAboveAcceptedRange";
		}
	},

	testOneDecrementBelowAcceptedRange: function () {
		try {
			var result = calculateTransportCost(null, MINIMUM_NUMBER_OF_GEESE-1);	
		} catch (err) {
			if (err !== "numGeese less than minimum") throw "Failed Test - testOneDecrementBelowAcceptedRange";
		}
	},

	testMaximumValue: function () {
		var result = calculateTransportCost(null, MAXIMUM_NUMBER_OF_GEESE);	
		if (result !== 4.611686018427388e18) throw "Failed Test - testMaximumValue";

	},

	testMinimumValue: function () {
		var result = calculateTransportCost(null, MINIMUM_NUMBER_OF_GEESE);	
		if (result !== 0) {
			throw "Failed Test - testMinimumValue";
		}
	},

	testStringInput: function () {
		try {
			var result = calculateTransportCost(null, "ABC");	
		} catch (err) {
			if (err !== "Invalid type exception for numGeese") throw "Failed Test - testStringInput";
		}
	},

	testValidValue: function () {
		var result = calculateTransportCost(null, 6);	
		if (result !== 3) throw "Failed Test - testValidValue";
	},


	testAll: function (){
		window.geesetests.testOneIncrementAboveAcceptedRange();
		window.geesetests.testOneDecrementBelowAcceptedRange();
		window.geesetests.testMaximumValue();
		window.geesetests.testMinimumValue();
		window.geesetests.testStringInput();
		window.geesetests.testValidValue();
		console.log("All tests passing.");
	}

};

window.geesetests.testAll();


