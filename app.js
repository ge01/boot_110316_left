/*
var integer = 4;
var string = "camel";
var holdWord = [];
var stringWord = "";
*/

function me(string, padint) {
  var holdWord = [];
  holdWord = string.split('');
  //console.log(holdWord);
  for(var i=0; i < padint; i++){
    holdWord.push("0");
  }

  stringWord = holdWord.join('');
  return stringWord;

  //stringWord = holdWord.join('');
}

console.log(me("camel", 4));


//console.log(stringWord);
