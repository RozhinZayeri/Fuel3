const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/users/fuelhistory.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('fuelhistory.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/users/fuelhistory.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("h1", () => {
 it("h1 text is fuel", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text("Fuel!")
 })
})
	
describe("h2", () => {
 it("h2 text is Account Past Quotes", () => {
  let element = document.querySelector('h2')
  expect(element).to.have.text("Account Past Quote")
 })
})
	
	
describe("caption", () => {
 it("caption text is Account Past Quotes", () => {
  let element = document.querySelector('caption')
  expect(element).to.have.text("Account Number:")
 })
})
	
	
describe("th", () => {
 it("th label check", () => {
  let element = document.querySelector('th')[0]
  expect(element).to.have.text("Delivery Date")
 })
})
	
describe("th", () => {
 it("th label check", () => {
  let element = document.querySelector('th')[1]
  expect(element).to.have.text("Delivery Address")
 })
})
	
describe("th", () => {
 it("th label check", () => {
  let element = document.querySelector('th')[2]
  expect(element).to.have.text("Gallons Requested")
 })
})
	
describe("th", () => {
 it("th label check", () => {
  let element = document.querySelector('th')[3]
  expect(element).to.have.text("Suggested Price")
 })
})
	
describe("th", () => {
 it("th label check", () => {
  let element = document.querySelector('th')[4]
  expect(element).to.have.text("Total Amount Due")
 })
})

})