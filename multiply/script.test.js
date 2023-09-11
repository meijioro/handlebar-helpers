const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ multiply a b }}');

describe("multiply helper", function () {

  it('returns NaN if args are undefined', function () {
    expect(template()).to.equal('NaN');
  });

  it('returns NaN if arguments are not numbers', function () {
    expect(template({a: '1', b: 'ok'})).to.equal('NaN');
    expect(template({a: 'bad', b: '123'})).to.equal('NaN');
  });

  it('returns the product of two factors', function () {
    expect(template({a: 10, b: 10})).to.equal('100');
  });

  it('returns the product of two factors even if numbers are strings', function () {
    expect(template({a: '10', b: '10'})).to.equal('100');
  });

});