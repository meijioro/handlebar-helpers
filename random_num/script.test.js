const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ random_num a }}');

describe("random_num helper", function () {

  it('returns NaN if something fails', function () {
    expect(template()).to.equal('NaN');
  });

  it('returns NaN if argument is a word string', function () {
    expect(template({a: 'bad'})).to.equal('NaN');
  });

  it('returns a random number', function () {
    expect(template({a: 5})).to.be.above(0);
    expect(template({a: '5'})).to.be.above(0);
  });

});