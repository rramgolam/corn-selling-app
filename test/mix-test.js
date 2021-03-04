window.mixtests = {

	testValidInput: function() {

		var result = calculateTransportCost(1,2);
		if (result !== 8 * COST_OF_TRANSPORT) {
			throw "Incorrect result";
		}
		result = calculateTransportCost(1,1);
		if (result !== 4 * COST_OF_TRANSPORT) {
			throw "Incorrect result";
		}
		result = calculateTransportCost(2,1);
		if (result !== 8 * COST_OF_TRANSPORT) {
			throw "Incorrect result";
		}


	},

	testExceedMixedItemTotal: function() {

		try {
			calculateTransportCost(1,4);
		} catch (err) {
			if (err !== "Exceeds maximum number of mixed items") throw "Failed Test - testExceedMixedItemTotal";
		}

		try {
			calculateTransportCost(4,1);
		} catch (err) {
			if (err !== "Exceeds maximum number of mixed items") throw "Failed Test - testExceedMixedItemTotal";
		}

		try {
			calculateTransportCost(4,4);
		} catch (err) {
			if (err !== "Exceeds maximum number of mixed items") throw "Failed Test - testExceedMixedItemTotal";
		}

	},

	testInvalidTypes: function() {

		try {
			calculateTransportCost("ABC",4);
		} catch (err) {
			if (err !== "Invalid type exception for numBags") throw "Failed Test - testInvalidTypes";
		}

		try {
			calculateTransportCost(4, "ABC");
		} catch (err) {
			if (err !== "Invalid type exception for numGeese") throw "Failed Test - testInvalidTypes";
		}

	},

	testAll: function (){
		window.mixtests.testValidInput();
		window.mixtests.testExceedMixedItemTotal();
		window.mixtests.testInvalidTypes();

		console.log("All tests passing.");
	}

}

window.mixtests.testAll();
