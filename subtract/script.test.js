const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ subtract a b }}');

describe("subtract helper", function () {

  it('returns NaN if something fails', function () {
    expect(template()).to.equal('NaN');
  });

  it('returns NaN if arguments are not numbers', function () {
    expect(template({a: '1', b: 'ok'})).to.equal('NaN');
    expect(template({a: 'bad', b: '123'})).to.equal('NaN');
  });

  it('returns the difference of two numbers', function () {
    expect(template({a: 5, b: 3})).to.equal('2');
  });

  it('returns the difference of two numbers even if number are strings', function () {
    expect(template({a: '5', b: '3'})).to.equal('2');
  });

});