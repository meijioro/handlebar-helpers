const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ add a b }}');

describe("add helper", function () {

  it('returns NaN if args are undefined', function () {
    expect(template()).to.equal('NaN');
  });

  it('returns NaN if arguments are not numbers', function () {
    expect(template({a: '1', b: 'ok'})).to.equal('NaN');
    expect(template({a: 'bad', b: '123'})).to.equal('NaN');
  });

  it('returns the sum of two numbers', function () {
    expect(template({a: 5, b: 3})).to.equal('8');
  });

  it('returns the sum of two numbers even if numbers are strings', function () {
    expect(template({a: '5', b: '3'})).to.equal('8');
  });

});