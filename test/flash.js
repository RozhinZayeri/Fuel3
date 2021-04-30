const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const userlogin = require('../views/partials/flash.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('flash.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../hope/views/partials/flash.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })
	
describe("alert check", () => {
 it("should have attr alert", () => {
  let element = document.querySelector('button');
  expect(element).to.have.attr('data-dismiss', 'alert')
 })
})


})