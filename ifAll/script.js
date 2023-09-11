Handlebars.registerHelper('ifAll', function () {

  const conditionals = _.initial(arguments),
    options = _.last(arguments),
    taken = _.takeWhile(conditionals, c => !!c === true);

    // see if any of the conditionals are falsy without needing to
    // iterate through all of them

  if (taken.length === conditionals.length) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

// DATA
const data = {
  one: true,
  two: true,
  three: true,
  four: false
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
