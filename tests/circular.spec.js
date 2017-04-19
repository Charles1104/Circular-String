const chai = require('chai');
const expect=chai.expect;
const circular = require('../app.js');

describe('Circular function', () => {

  it('should be function', () => {
    expect(circular).to.be.a('function');
  });

});

describe('Data entered', () => {

  it('the main word should be a string', () => {
    expect(circular.bind(null,[4,5])).to.throw("Only string as argument");
    expect(circular.bind(null,6)).to.throw("Only string as argument");
    expect(circular.bind(null,{gender: "male"})).to.throw("Only string as argument");
  });
});

describe('check for circular', () => {

  it('should verify that the search is circularly included in the word', () => {
    expect(circular("banana", "nan")).to.be.equal(true);
    expect(circular("Animal", "aLa")).to.be.equal(true);
    expect(circular("cat", "catcatcat")).to.be.equal(false);
    expect(circular("banana", "nae")).to.be.equal(false);
    expect(circular("Animal", "aiLa")).to.be.equal(true);
    expect(circular("cat", "cat")).to.be.equal(true);
  });

});