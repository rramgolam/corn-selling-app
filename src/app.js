function calculateTransportCost(numBags) {

	validateNumBagsInput(numBags);

	return (numBags * COST_OF_TRANSPORT) * 2;

}

function validateNumBagsInput(numBags) {
	if (typeof numBags !== "number") {
		throw "Invalid type exception";
	}

	if (numBags < MINIMUM_BAGS_OF_CORN || numBags > MAXIMUM_BAGS_OF_CORN) throw "Out of Bounds";
}

// entry point to app.js
function onLoad() {
	// default bag input field to 1
	document.getElementById("bagInputField").value = MINIMUM_BAGS_OF_CORN;
	updateCost(MINIMUM_BAGS_OF_CORN);
}

// increment bag input field - provided the value is within a valid range & update display
function incrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value + 1 <= MAXIMUM_BAGS_OF_CORN) {
		current.value = value + 1;
		updateCost(value + 1);
	}

}

// decrement bag input field - provided the value is within a valid range & update display
function decrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value - 1 >= MINIMUM_BAGS_OF_CORN) {
		current.value = value - 1;
		updateCost(value - 1);
	}

}

// update the current cost of transport & display
function updateCost(value) {
	document.getElementById("costDisplay").innerText = "£" + calculateTransportCost(value).toFixed(2);
}
	

