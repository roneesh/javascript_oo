var util = require('./customUtil.js');
var bike = require('./bike.js');

function RoadBike( size, tapeColor, spares) {
	
	bike.Bike.call(this);
	this.prototype = bike.Bike.prototype;
	
	this.size = size;
	util.extend(this.spares, spares);
}

RoadBike.prototype = new bike.Bike();
RoadBike.prototype.roadRide = function() {
	this.rideInterval = setInterval(function() {console.log('road riding...\n')}, 1000);
}

var rb = new RoadBike('M', 'red', { chain : '10-speed', tapeSize : '23'});

console.log(util.propView(rb));
rb.roadRide();
rb.brake();
