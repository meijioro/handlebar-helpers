const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ includes a b }}');

describe("includes helper", function () {

  it('returns true if contains string', function () {
    expect(template({a: 'ace_1DollarOff', b: 'Off'})).to.equal('true');
    expect(template({a: 'ace_percentOff', b: 'Off'})).to.equal('true');
    expect(template({a: 'ace_Offpercent', b: 'Off'})).to.equal('true');
  });

  it('returns false if does not contains string', function () {
    expect(template({a: 'ace_1DollarOff', b: 'hello'})).to.equal('false');
  });

  it('returns false if string is not case sensitive', function () {
    expect(template({a: 'ace_1DollarOff', b: 'off'})).to.equal('false');
  });

});