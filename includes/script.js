Handlebars.registerHelper('includes', function (string, substring) {
  return string.includes(substring);
});

//DATA
const data = {
  field1: 'ace_1DollarOff',
  field2: 'ace_5off10',
  field3: 'ace_percentOff'
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);

