const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/partials/footer.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('footer.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../views/partials/footer.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })
	
	
describe("span text", () => {
 it("span text should be 'Contact Us'", () => {
  let element = document.querySelector('span')
  expect(element).to.have.text("Contact Us")
 })
})
	
})