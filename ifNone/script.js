Handlebars.registerHelper('ifNone', function () {
  const conditionals = _.initial(arguments),
    options = _.last(arguments),
    truthyFound = _.find(conditionals, function (conditional) {
      // see if any of the conditionals are truthy without needing to
      // iterate through all of them (once we've found it)
      return !!conditional === true;
    });

  if (truthyFound !== undefined) {
    // at least one of the conditionals is truthy
    // so _find returns quickly without iterating over all of them
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});


const data = {
  one: true,
  two: true,
  three: true,
  four: false,
  five: false,
}


const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
