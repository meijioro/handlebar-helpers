const chai = window.chai;
const expect = chai.expect;

describe("ifNone helper", function () {

  it('is true if all conditionals are falsy', function () {
    const tpl = Handlebars.compile('{{#ifNone a b}}yes{{else}}no{{/ifNone}}');

    expect(tpl({a: false, b: false})).to.equal('yes');
    expect(tpl({a: '', b: 0})).to.equal('yes');
    expect(tpl({a: undefined, b: undefined})).to.equal('yes');
    expect(tpl({a: undefined, b: null})).to.equal('yes');
  });

  it('is false if any conditionals are truthy', function () {
    const tpl = Handlebars.compile('{{#ifNone a b}}yes{{else}}no{{/ifNone}}');

    expect(tpl({a: true, b: false})).to.equal('no');
    expect(tpl({a: 'true', b: ''})).to.equal('no');
    expect(tpl({a: 1, b: 0})).to.equal('no');
    expect(tpl({a: undefined, b: 1})).to.equal('no');
  });
});