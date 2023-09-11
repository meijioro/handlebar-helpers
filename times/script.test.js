const chai = window.chai;
const expect = chai.expect;
const template = Handlebars.compile('{{#times a}}{{@index}},{{/times}}');

describe("freemarker helper", function () {

  it('loops 3 times and outputs index', function () {
    expect(template({a: '3'})).to.equal('0,1,2,');
  });

  it('does nothing param is not a number', function () {
    expect(template({a: 'hello'})).to.equal('');
  });
});