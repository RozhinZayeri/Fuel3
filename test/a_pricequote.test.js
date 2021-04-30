const assert = require('chai');
let quote = require('../views/users/fuelmargin.js');
let expect = assert.expect;

// testing if gallon request is a number
describe('testing is gallon amount is a number', function() {	
	let gallonsInstance = new quote.gallons(1000);
	let gallonsoutput = gallonsInstance.gallonAmount;
	it('check num', function() {
		expect(gallonsoutput).to.be.greaterThan(0);	
	})
});

// testing if gallon request is a negative number
// will fail if not over 0
describe('testing if gallon is over >= 0', function() {	
	let gallonsInstance = new quote.gallons(-1);
	let gallonsoutput = gallonsInstance.gallonAmount;
	it('check num', function(){
		expect(gallonsoutput).to.be.greaterThan(0);	
	})
});

// testing if gallon request is not infinity
describe('not inf', function() {	
	let gallonsInstance = new quote.gallons(1000);
	let gallonsoutput = gallonsInstance.gallonAmount;
	it('check num', function(){
		expect(gallonsoutput).lessThan(Infinity);	
	})
});

// checking if name is a string 
describe('name must be a string', function() {
	let name = new quote.margins(1000, "TX", "John Doe", true);
	let nameInput = name.name;
	it('check name', function() {
		expect(nameInput).to.be.string;
	})
});

// state must be length of 2
describe('state must be 2 letters', function() {
	let state = new quote.margins(1000, "TX", "John Doe", true);
	let stateInput = state.state;
	it('check name', function() {
		expect(stateInput).to.be.length(2);
	})	
});

