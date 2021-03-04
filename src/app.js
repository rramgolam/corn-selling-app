function calculateTransportCost(numBags, numGeese) {

	if (numBags === null) {
		numBags = MINIMUM_BAGS_OF_CORN;
	}

	if (numGeese === null || numGeese === undefined) {
		numGeese = MINIMUM_NUMBER_OF_GEESE;
	}

	validateNumBagsInput(numBags, numGeese);

	var result;
	if (numBags > 0 && numGeese > 0) {
		//complicated
		if (numBags === numGeese) {
			result = COST_OF_TRANSPORT * 4;
		} else {
			result = COST_OF_TRANSPORT * 8;
		}

	} else if (numBags > 0) {
		result = (numBags * COST_OF_TRANSPORT) * 2;
	} else {
		result = (numGeese * COST_OF_TRANSPORT) * 2;
	}

	return result;

}

function validateNumBagsInput(numBags, numGeese) {

	if (typeof numBags !== "number" && numBags !== null) {
		throw "Invalid type exception for numBags";
	}
	if (typeof numGeese !== "number" && numGeese !== null && numGeese !== undefined) {
		throw "Invalid type exception for numGeese";
	}

	if (numBags < MINIMUM_BAGS_OF_CORN) {
		throw "numBags less than minimum";
	}
	if (numGeese < MINIMUM_NUMBER_OF_GEESE) {
		throw "numGeese less than minimum";
	}

	if (numBags > 0 && numGeese > 0) {
		//complicated
		if ((numBags + numGeese) > MAX_NUMBER_MIXED_ITEMS) {
			throw "Exceeds maximum number of mixed items";
		}

	} else if (numBags > 0) {
		if (numBags > MAXIMUM_BAGS_OF_CORN) throw "numBags greater than maximum";
	} else {
		if (numGeese > MAXIMUM_NUMBER_OF_GEESE) throw "numBags greater than maximum";
	}

}

// entry point to app.js
function onLoad() {
	// default bag & geese input field to 1
	document.getElementById("bagInputField").value = MINIMUM_BAGS_OF_CORN;
	document.getElementById("geeseInputField").value = MINIMUM_NUMBER_OF_GEESE;

	updateElement(calculateTransportCost(MINIMUM_BAGS_OF_CORN, MINIMUM_NUMBER_OF_GEESE));
}

// increment bag input field - provided the value is within a valid range & update display
function incrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);
	value += 1;

	try {
		var geese = parseInt(document.getElementById("geeseInputField").value);
		var result = calculateTransportCost(value, geese);
		updateElement(result);
		current.value = value;
	} catch (err) {

	}

	// if (value + 1 <= MAXIMUM_BAGS_OF_CORN) {
	// 	current.value = value + 1;
	// 	updateCost(value + 1);
	// }

}

// decrement bag input field - provided the value is within a valid range & update display
function decrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);
	value -= 1;

	try {
		var geese = parseInt(document.getElementById("geeseInputField").value);
		var result = calculateTransportCost(value, geese);
		updateElement(result);
		current.value = value;

	} catch (err) {

	}

	// if (value - 1 >= MINIMUM_BAGS_OF_CORN) {
	// 	current.value = value - 1;
	// 	updateCost(value - 1);
	// }

}

// increment bag input field - provided the value is within a valid range & update display
function incrementNumGeese() {

	var current = document.getElementById("geeseInputField");
	var value = parseInt(current.value);
	value += 1;

	try {
		var numBags = parseInt(document.getElementById("bagInputField").value);
		var result = calculateTransportCost(numBags, value);
		updateElement(result);
		current.value = value;
	} catch (err) {

	}

	// if (value + 1 <= MAXIMUM_BAGS_OF_CORN) {
	// 	current.value = value + 1;
	// 	updateCost(value + 1);
	// }

}

// decrement bag input field - provided the value is within a valid range & update display
function decrementNumGeese() {

	var current = document.getElementById("geeseInputField");
	var value = parseInt(current.value);
	value -= 1;

	try {
		var numBags = parseInt(document.getElementById("bagInputField").value);
		var result = calculateTransportCost(numBags, value);
		updateElement(result);
		current.value = value;

	} catch (err) {

	}

	// if (value - 1 >= MINIMUM_BAGS_OF_CORN) {
	// 	current.value = value - 1;
	// 	updateCost(value - 1);
	// }

}


function updateElement(value) {
		document.getElementById("costDisplay").innerText = "£" + value.toFixed(2);

}

