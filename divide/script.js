Handlebars.registerHelper('divide', function (a, b) {
  return +a / +b;
});

// DATA
const data = {
  num1: 100,
  num2: 20,
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
