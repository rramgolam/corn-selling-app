function testInvalidExtremeUpper() {

	try {
		var result = calculateTransportCost(16);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testInvalidExtremeUpper";
	}

}

function testInvalidExtremeLower() {
	try {
		var result = calculateTransportCost(0);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testInvalidExtremeUpper";
	}
}

function testValidExtremeUpper() {
	try {
		var result = calculateTransportCost(15);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testInvalidExtremeUpper";
	}
	if (result !== 7.5) throw "Failed Test - testValidExtremeUpper";

}

function testValidExtremeLower() {
	var result = calculateTransportCost(1);	
	if (result !== 0.5) {
		throw "Failed Test - testValidExtremeLower";
	}
}

function testInvalidType() {
	try {
		var result = calculateTransportCost("ABC");	
	} catch (err) {
		if (err !== "Invalid type exception") throw "Failed Test - testInvalidType";
	}}

function testValid() {
	try {
		var result = calculateTransportCost(6);	
	} catch (err) {
		if (err !== "Out of Bounds") throw "Failed Test - testValid";
	}
	if (result !== 3) throw "Failed Test - testValid";
}


function testAll(){
	testInvalidExtremeUpper();
	testInvalidExtremeLower();
	testValidExtremeUpper();
	testValidExtremeLower();
	testInvalidType();
	testValid();
	console.log("All tests passing.");
}

testAll();