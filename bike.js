exports.Bike = function() {
	this.size = undefined;
	this.chain = '10-speed';
	this.tireSize = '23';
	this.spares = {
		tapeColor: 'black'
	}
}

exports.Bike.prototype.ride = function() {
	this.rideInterval = setInterval(function() {console.log('riding...\n')}, 1000);
}

exports.Bike.prototype.brake = function() {
	this.rideBrake = setInterval(function() {clearInterval(this.rideInterval); console.log('brake!')}, 5000)
}