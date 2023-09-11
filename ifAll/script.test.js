const chai = window.chai;
const expect = chai.expect;

describe("ifAll helper", function () {

  it('is true if all conditionals are truthy', function () {
    const tpl = Handlebars.compile('{{#ifAll a b}}yes{{else}}no{{/ifAll}}');

    expect(tpl({a: true, b: true})).to.equal('yes');
    expect(tpl({a: 'abc', b: 123})).to.equal('yes');
  });

  it('is false if any conditionals are falsy', function () {
    const tpl = Handlebars.compile('{{#ifAll a b}}yes{{else}}no{{/ifAll}}');

    expect(tpl({a: true, b: false})).to.equal('no');
    expect(tpl({a: 'true', b: ''})).to.equal('no');
    expect(tpl({a: 1, b: 0})).to.equal('no');
    expect(tpl({a: undefined, b: true})).to.equal('no');
  });

});