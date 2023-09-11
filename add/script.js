Handlebars.registerHelper('add', function (a, b) {
  return parseInt(a, 10) + parseInt(b, 10);
});

// DATA
const data = {
  num1: 10,
  num2: 20,
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
