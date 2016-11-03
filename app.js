var integer = 4;
var string = "camel";
var holdWord = [];
var stringWord = "";

holdWord = string.split('');
for(var i=0; i < integer; i++){
  holdWord.push("0");
}
stringWord = holdWord.join('');


console.log(stringWord);

/*
string = "a";
repeatSTring = string.repeat(4);

test = "bird";

console.log(repeatSTring + test);

console.log(test + repeatSTring);
*/
