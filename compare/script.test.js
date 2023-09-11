const chai = window.chai;
const expect = chai.expect;

describe("compare helper", function () {

  function testString(operator) {
    if (operator) {
      return `{{#compare a "${operator}" b}}yes{{else}}no{{/compare}}`;
    } else {
      return '{{#compare a b}}yes{{else}}no{{/compare}}';
    }
  }

  it('throws error if not enough arguments are passed in', function () {
    const result = function () {
      return Handlebars.compile('{{ compare a }}')({a: true}); // no b
    };

    expect(result).to.throw(Error);
  });

  it('throws error if unrecognized operator is passed in', function () {
    const result = function () {
      return Handlebars.compile(testString('+!+'))({a: true, b: true});
    };

    expect(result).to.throw(Error);
  });

  it('compares with strict equality by default', function () {
    const tpl = Handlebars.compile(testString());

    expect(tpl({ a: true, b: true })).to.equal('yes');
  });

  it('compares equality', function () {
    const tpl = Handlebars.compile(testString('==='));

    expect(tpl({ a: 1, b: 2 })).to.equal('no');
    expect(tpl({ a: 1, b: 1 })).to.equal('yes');
  });

  it('compares inequality', function () {
    const tpl = Handlebars.compile(testString('!=='));

    expect(tpl({ a: 1, b: 2 })).to.equal('yes');
    expect(tpl({ a: 1, b: 1 })).to.equal('no');
  });

  it('compares greater than', function () {
    const tpl = Handlebars.compile(testString('>'));

    expect(tpl({ a: 1, b: 2 })).to.equal('no');
    expect(tpl({ a: 2, b: 1 })).to.equal('yes');
  });

  it('compares less than', function () {
    const tpl = Handlebars.compile(testString('<'));

    expect(tpl({ a: 1, b: 2 })).to.equal('yes');
    expect(tpl({ a: 2, b: 1 })).to.equal('no');
  });

  it('compares greater than or equal', function () {
    const tpl = Handlebars.compile(testString('>='));

    expect(tpl({ a: 2, b: 2 })).to.equal('yes');
    expect(tpl({ a: 2, b: 1 })).to.equal('yes');
    expect(tpl({ a: 1, b: 2 })).to.equal('no');
  });

  it('compares less than or equal', function () {
    const tpl = Handlebars.compile(testString('<='));

    expect(tpl({ a: 1, b: 2 })).to.equal('yes');
    expect(tpl({ a: 2, b: 2 })).to.equal('yes');
    expect(tpl({ a: 2, b: 1 })).to.equal('no');
  });

  it('compares typeof', function () {
    const tpl = Handlebars.compile(testString('typeof'));

    expect(tpl({ a: 1, b: 'number' })).to.equal('yes');
    expect(tpl({ a: 'foo', b: 'string' })).to.equal('yes');
    expect(tpl({ a: {}, b: 'string' })).to.equal('no');
  });

  // inline comparison allows you to use this helper as a subexpression, e.g.
  // {{#ifAll (compare foo bar) (compare foo baz)}}
  it('compares inline with strict equality by default', function () {
    const tpl = Handlebars.compile('{{ compare a b }}');

    expect(tpl({a: true, b: true})).to.equal('true');
    expect(tpl({a: true, b: false})).to.equal('false');
  });

  it('compares inline with inequality', function () {
    const tpl = Handlebars.compile('{{ compare a "!==" b }}');

    expect(tpl({a: true, b: true})).to.equal('false');
    expect(tpl({a: true, b: false})).to.equal('true');
  });
});