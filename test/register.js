const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/users/register.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('register.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/users/register.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("h5", () => {
 it("h5 text", () => {
  let element = document.querySelector('h5')
  expect(element).to.have.text("Register")
 })
})
	
describe("form action", () => {
 it("form action should be post", () => {
  let element = document.querySelector('form')
  expect(element).to.have.attr('method', 'POST')
 })
})
	
describe("input required", () => {
 it("input is required", () => {
  let element = document.querySelector('input')[0]
  expect(element).to.have.attr("required")
 })
})
	
describe("input required", () => {
 it("input is required", () => {
  let element = document.querySelector('input')[1]
  expect(element).to.have.attr("required")
 })
})
	
describe("valid feedback", () => {
 it("valid feedback should be looks good", () => {
  let element = document.querySelector('valid-feedback');
  expect(element).to.have.text("Looks good!")
 })
})
	

})