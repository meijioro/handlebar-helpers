// HELPER
const operators = {
  '===': (l, r) => l === r,
  '==': (l, r) => l == r,
  '!==': (l, r) => l !== r,
  '<': (l, r) => l < r,
  '>': (l, r) => l > r,
  '<=': (l, r) => l <= r,
  '>=': (l, r) => l >= r,
  typeof: (l, r) => typeof l === r
};

Handlebars.registerHelper('compare', function (left, operator, right, options) {
  let result;

  if (arguments.length < 3) { // options is always passed in
    throw new Error('Handlerbars Helper "compare" needs 2 parameters');
  }

  if (options === undefined) {
    options = right;
    right = operator;
    operator = '===';
  }

  if (!operators[operator]) {
    throw new Error(`Handlerbars Helper "compare" doesn't know the operator ${operator}`);
  }

  result = operators[operator](left, right);

  // if used as a block helper, this will have options.fn and options.inverse
  // if used inline, simply return true/emptystring
  if (result) {
    return options.fn ? options.fn(this) : true;
  } else {

    console.log(options.inverse)
    return options.inverse ? options.inverse(this) : false;
  }
});

// DATA
const data = {
  number: 10,
  string: 'hello'
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
