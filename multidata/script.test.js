const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{ multidata a b }}');

describe("multidata helper", function () {

  it('returns value in correct array position', function () {
    expect(template({a: 'dollar|1|empty|80037064_BC', b: 3})).to.equal('80037064_BC');
  });

  it('returns empty string when value is "empty"', function () {
    expect(template({a: 'dollar|1|empty|80037064_BC', b: 2})).to.equal('');
  });

  it('returns empty string if array is less than number of positions', function () {
    expect(template({a: 'ace_50Percentoff30', b: '3'})).to.equal('');
  });

});