
var transportCostPerUnit = 0.25;

function calculateTransportCost(numBags) {
	
	if (typeof numBags !== "number") {
		throw "Invalid type exception";
	}

	if (numBags < 1 || numBags > 15) throw "Out of Bounds";

	return (numBags * transportCostPerUnit) * 2;

}