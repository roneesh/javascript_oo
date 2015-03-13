var util = require('./customUtil.js');
var bike = require('./bike.js');

function MountainBike( size, frontShock, rearShock) {
	
	bike.Bike.call(this);

	this.size = size;
	this.frontShock = frontShock;
	this.rearShock = rearShock;

}
MountainBike.prototype = new bike.Bike();
MountainBike.prototype.mountainRide = function() {
	this.rideInterval = setInterval(function() {console.log('mountain riding...\n')}, 1000);
}

var mb = new MountainBike('S', 'Manit', 'Fox');
mb.mountainRide();
mb.brake();