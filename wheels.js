var wheel = require('./wheel.js');

function Wheels(data) {
	this.wheels = wheelify(data);
	this.diameters = diameters(this.wheels);

	function wheelify(data) {
		var wheelifiedData = [];

		data.forEach(function(element,index,array) {
			wheelifiedData.push(new wheel.Wheel(element[0], element[1]));
		});
		return wheelifiedData;
	};

	function diameters(wheels) {
		var wheelDiameters = [];
		wheels.forEach(function(wheel) {
			wheelDiameters.push(wheel.diameter);
		});
		return wheelDiameters;
	}

}

var w = new Wheels([[1,2],[1,2],[1,2]]);
console.log(w.wheels);
console.log(w.diameters);

var w2 = new wheel.Wheel(26,1.5);
console.log(w2.circumference);