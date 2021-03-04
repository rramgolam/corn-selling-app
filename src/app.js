
var transportCostPerUnit = 0.25;

function calculateTransportCost(numBags) {

	validateNumBagsInput(numBags);

	return (numBags * transportCostPerUnit) * 2;

}

function validateNumBagsInput(numBags) {
	if (typeof numBags !== "number") {
		throw "Invalid type exception";
	}

	if (numBags < 1 || numBags > 15) throw "Out of Bounds";
}

// entry point to app.js
function onLoad() {
	// default bag input field to 1
	document.getElementById("bagInputField").value = 1;
	updateCost(1);
}

// increment bag input field - provided the value is within a valid range & update display
function incrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value + 1 <= 15) {
		current.value = value + 1;
		updateCost(value + 1);
	}

}

// decrement bag input field - provided the value is within a valid range & update display
function decrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value - 1 >= 1) {
		current.value = value - 1;
		updateCost(value - 1);
	}

}

// update the current cost of transport & display
function updateCost(value) {
	document.getElementById("costDisplay").innerText = "£" + calculateTransportCost(value).toFixed(2);
}
	

