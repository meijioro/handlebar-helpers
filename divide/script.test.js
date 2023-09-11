const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ divide a b }}');

describe("divide helper", function () {

  it('returns NaN if args are undefined', function () {
    expect(template()).to.equal('NaN');
  });

  it('returns NaN if arguments are not numbers', function () {
    expect(template({a: '1', b: 'ok'})).to.equal('NaN');
    expect(template({a: 'bad', b: '123'})).to.equal('NaN');
  });

  it('returns the result of dividing the first number by the second number', function () {
    expect(template({a: 100, b: 25})).to.equal('4');
  });

  it('returns the result of dividing the first number by the second number even if numbers are strings', function () {
    expect(template({a: '100', b: '25'})).to.equal('4');
  });

});