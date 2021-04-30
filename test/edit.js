const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/users/edit.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('edit.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/users/edit.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("h2 text", () => {
 it("h2 text", () => {
  let element = document.querySelector('h2')
  expect(element).to.have.text("Welcome")
 })
})
	
describe("form method check", () => {
 it("form method POST", () => {
  let element = document.querySelector('form');
  expect(element).to.have.attr('method', 'POST')
 })
})
	
describe("input required", () => {
 it("input should be required", () => {
  let element = document.querySelector('input');
  expect(element).to.have.attr("required")
 })
})
	
describe("input required", () => {
 it("input should be required", () => {
  let element = document.querySelector('input');
  expect(element).to.have.attr("required")
 })
})
	
describe("h5 text", () => {
 it("h5 text", () => {
  let element = document.querySelector('h5')
  expect(element).to.have.text("ADDRESS 1 (Required)")
 })
})
	
describe("input required", () => {
 it("input should be required", () => {
  let element = document.querySelector('input')[1];
  expect(element).to.have.attr("required")
 })
})
	
describe("input required", () => {
 it("input should be required", () => {
  let element = document.querySelector('input')[2];
  expect(element).to.have.attr("required")
 })
})
	
describe("input required", () => {
 it("input should be required", () => {
  let element = document.querySelector('input')[3];
  expect(element).to.have.attr("required")
 })
})
	
describe("h5 text", () => {
 it("h5 text", () => {
  let element = document.querySelector('h5')[1]
  expect(element).to.have.text("ADDRESS 2 (Optional)")
 })
})

describe("button text", () => {
 it("button text", () => {
  let element = document.querySelector('button')
  expect(element).to.have.text("Update Profile")
 })
})

})