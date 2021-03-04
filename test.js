function testOneIncrementAboveAcceptedRange() {
	try {
		var result = calculateTransportCost(16);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testOneIncrementAboveAcceptedRange";
	}
}

function testOneDecrementBelowAcceptedRange() {
	try {
		var result = calculateTransportCost(0);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testOneDecrementBelowAcceptedRange";
	}
}

function testMaximumValue() {
	try {
		var result = calculateTransportCost(15);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testMaximumValue";
	}
	if (result !== 7.5) throw "Failed Test - testMaximumValue";

}

function testMinimumValue() {
	var result = calculateTransportCost(1);	
	if (result !== 0.5) {
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