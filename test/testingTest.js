const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/test.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('test.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/test.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("a tag text", () => {
 it("a tag element should say 'Click ME!'", () => {
  let element = document.querySelector('a')
  expect(element).to.have.text("Click ME!")
 })
})
	
describe("center text", () => {
 it("center element should say thank user and direct to link", () => {
  let element = document.querySelector('center')
  expect(element).to.have.text("Thank you for visiting our website, please click on the link below to update your profile.")
 })
})

})