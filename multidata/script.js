Handlebars.registerHelper('multidata', function (string, position) {  
  let val;

  if (string) {
    const arr = string.split('|');
    val = arr[+position]; //make sure position is a number
  }

  return val && val != 'empty' ? val.trim() : '';
});

//DATA
const data = {
  field1: 'dollar|1|empty|80037064_BC',
  field2: 'offAmt|5|10|90199004_BC|DP126058',
  field3: 'ace_50Percentoff30'
}


// ADD TO PAGE
const app = document.getElementById('app');
const handlebarsTemplate = document.getElementById('handlebars-template').innerHTML;
const templateCompile = Handlebars.compile(handlebarsTemplate);
app.innerHTML = templateCompile(data);

