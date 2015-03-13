var wheel = require('./wheel.js');

function Gear(chainRing, cog, wheel) {
	this.chainRing = chainRing;
	this.cog = cog;
	this.wheel = wheel;

	var ret = {}, that = this;

	ret.ratio = function() {
		return that.chainRing / that.cog;
	}
	ret.gearInches = function() {return this.ratio() * that.wheel.diameter;}

	return ret;
}

var g = new Gear(52,11, new wheel.Wheel(26,1.5));
console.log('***calculated values***');
console.log(g.ratio());
console.log(g.gearInches());

