
var transportCostPerUnit = 0.25;

function calculateTransportCost(numBags) {

	if (typeof numBags !== "number") {
		throw "Invalid type exception";
	}

	if (numBags < 1 || numBags > 15) throw "Out of Bounds";

	return (numBags * transportCostPerUnit) * 2;

}

function onLoad() {
	document.getElementById("bagInputField").value = 1;
	updateDisplay(1);

}

function incrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value + 1 <= 15) {
		current.value = value + 1;

		updateDisplay(value + 1);
	}

}

function decrementNumBags() {

	var current = document.getElementById("bagInputField");
	var value = parseInt(current.value);

	if (value - 1 >= 1) {
		current.value = value - 1;

		updateDisplay(value - 1);

	}

}

function updateDisplay(value) {
	document.getElementById("costDisplay").innerText = "£" + calculateTransportCost(value).toFixed(2);
}
	

