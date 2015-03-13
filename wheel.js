exports.Wheel = function(rim, tire) {
	this.rim = rim;
	this.tire = tire;
	this.diameter = rim + (tire * 2);
	this.circumference = this.diameter * Math.PI;
	return false;
}