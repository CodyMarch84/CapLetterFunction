function capWords(word1, word2){
  return word1 + " " + word2;
}
function getUserInput(){
  let txt= prompt("Type in a word (lower case)");
  return txt;
}
let word1=getUserInput();
let word2=getUserInput();
console.log(capWords(word1, word2));
