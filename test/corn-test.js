window.corntests = {

	testOneIncrementAboveAcceptedRange: function () {
		try {
			var result = calculateTransportCost(MAXIMUM_BAGS_OF_CORN+1);	
		} catch (err) {
			if (err !== "Out of Bounds") throw "Failed Test - testOneIncrementAboveAcceptedRange";
		}
	},

	testOneDecrementBelowAcceptedRange: function () {
		try {
			var result = calculateTransportCost(MINIMUM_BAGS_OF_CORN-1);	
		} catch (err) {
			if (err !== "Out of Bounds") throw "Failed Test - testOneDecrementBelowAcceptedRange";
		}
	},

	testMaximumValue: function () {
		try {
			var result = calculateTransportCost(MAXIMUM_BAGS_OF_CORN);	
		} catch (err) {
			if (err !== "Out of Bounds") throw "Failed Test - testMaximumValue";
		}
		if (result !== 4.611686018427388e18) throw "Failed Test - testMaximumValue";

	},

	testMinimumValue: function () {
		var result = calculateTransportCost(MINIMUM_BAGS_OF_CORN);	
		if (result !== 0) {
			throw "Failed Test - testMinimumValue";
		}
	},

	testStringInput: function () {
		try {
			var result = calculateTransportCost("ABC");	
		} catch (err) {
			if (err !== "Invalid type exception") throw "Failed Test - testStringInput";
		}
	},

	testValidValue: function () {
		try {
			var result = calculateTransportCost(6);	
		} catch (err) {
			if (err !== "Out of Bounds") throw "Failed Test - testValidValue";
		}
		if (result !== 3) throw "Failed Test - testValidValue";
	},


	testAll: function (){
		window.corntests.testOneIncrementAboveAcceptedRange();
		window.corntests.testOneDecrementBelowAcceptedRange();
		window.corntests.testMaximumValue();
		window.corntests.testMinimumValue();
		window.corntests.testStringInput();
		window.corntests.testValidValue();
		console.log("All tests passing.");
	}

};

window.corntests.testAll();


