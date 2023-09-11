const chai = window.chai;
const expect = chai.expect;

describe("ifAny helper", function () {

  it('is true if any conditionals are truthy', function () {
    const tpl = Handlebars.compile('{{#ifAny a b}}yes{{else}}no{{/ifAny}}');

    expect(tpl({a: true, b: true})).to.equal('yes');
    expect(tpl({a: 'abc', b: 0})).to.equal('yes');
    expect(tpl({a: undefined, b: 1})).to.equal('yes');
  });

  it('is false if all conditionals are falsy', function () {
    const tpl = Handlebars.compile('{{#ifAny a b}}yes{{else}}no{{/ifAny}}');
    expect(tpl({a: false, b: false})).to.equal('no');
    expect(tpl({a: '', b: ''})).to.equal('no');
    expect(tpl({a: 0, b: 0})).to.equal('no');
    expect(tpl({a: undefined, b: null})).to.equal('no');
  });
});