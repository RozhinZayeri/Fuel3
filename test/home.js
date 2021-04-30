const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/home.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('home.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/home.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })
	
describe("nav link one", () => {
 it("nav link one says fuel", () => {
  let element = document.querySelectorAll("a")[0]
  expect(element).to.have.text("Fuel")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[1]
  expect(element).to.have.text("Home")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[2]
  expect(element).to.have.text("Login")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[3]
  expect(element).to.have.text("Register")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[4]
  expect(element).to.have.text("Logout")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[5]
  expect(element).to.have.text("Edit Profile")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[6]
  expect(element).to.have.text("fuelQuote")
 })
})
	
describe("nav link two", () => {
 it("nav link two says home", () => {
  let element = document.querySelectorAll("a")[7]
  expect(element).to.have.text("fuel history")
 })
})
	 
})