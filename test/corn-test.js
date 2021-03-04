function testOneIncrementAboveAcceptedRange() {
	try {
		var result = calculateTransportCost(MAXIMUM_BAGS_OF_CORN+1);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testOneIncrementAboveAcceptedRange";
	}
}

function testOneDecrementBelowAcceptedRange() {
	try {
		var result = calculateTransportCost(MINIMUM_BAGS_OF_CORN-1);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testOneDecrementBelowAcceptedRange";
	}
}

function testMaximumValue() {
	try {
		var result = calculateTransportCost(MAXIMUM_BAGS_OF_CORN);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testMaximumValue";
	}
	if (result !== 4.611686018427388e18) throw "Failed Test - testMaximumValue";

}

function testMinimumValue() {
	var result = calculateTransportCost(MINIMUM_BAGS_OF_CORN);	
	if (result !== 0) {
		throw "Failed Test - testMinimumValue";
	}
}

function testStringInput() {
	try {
		var result = calculateTransportCost("ABC");	
	} catch (err) {
		if (err !== "Invalid type exception") throw "Failed Test - testStringInput";
	}}

function testValidValue() {
	try {
		var result = calculateTransportCost(6);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testValidValue";
	}
	if (result !== 3) throw "Failed Test - testValidValue";
}


function testAll(){
	testOneIncrementAboveAcceptedRange();
	testOneDecrementBelowAcceptedRange();
	testMaximumValue();
	testMinimumValue();
	testStringInput();
	testValidValue();
	console.log("All tests passing.");
}

testAll();