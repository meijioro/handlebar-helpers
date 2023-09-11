Handlebars.registerHelper('random_num', function (num) {
  return Math.floor(Math.random() * num) + 1;
});


// DATA
const data = {}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);
