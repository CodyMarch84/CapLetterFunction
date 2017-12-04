"use strict";

//My answer
// function capLetters(word1){
// //Seperate words in a string based on spaces
//   let splitWords = word1.split(" ");
//   let capArray = [];
// for (let i = 0;i < splitWords.length; i++){
//   let word =  splitWords[i];
//   let capWord = word[0].toUpperCase() + word.slice(1);
//   capArray.push(capWord);
// }
//   let result = capArray.join(" ");
//   return result;
// }
// function getUserInput(){
//   let input = prompt();
//   return input;
// }
//   console.log(capLetters(getUserInput()));


//Other examples to capitalize certain letters (Mike's Example Answer)
function capitalizeLetters(phrase) {
  //console.log(typeof phrase);
  //console.log(typeof 4567);

  phrase = phrase.toLowerCase();
  let wordsArray = phrase.split(" ");
  let capitalWordsArray = [];
  //What does this condition mean??? write answer here when you get it
  for (let h = 0; h < wordsArray.length; h++) {
    let capitalizedLetter = wordsArray[h].charAt(0).toUpperCase();
    let restOfWord = wordsArray[h].slice(1);
    let capitalizedWord = capitalizedLetter + restOfWord;

    capitalWordsArray.push(capitalizedWord);
    //wordsArray[h] = wordsArray[h].charAt(0).toUpperCase() + wordsArray[h].slice(1); //(does all the 'lets' in the ForLoop)
  }
    let capitalizedPhrase = capitalWordsArray.join(" ");
   return capitalizedPhrase;
}

let userInput = prompt("Enter a phrase")
let answer = capitalizeLetters(userInput); //let answer = capitalizeWords(prompt("Enter a phrase")) --another example
console.log(answer);












  // function capitalWords(splitWords){
  //     let capArray = [];
  // for (let i = 0;i < splitWords.length; i++){
  //     let word =  splitWords[i];
  //     let capWord = word[0].toUpperCase() + word.slice(1);
  //     capArray.push(capWord);
  //   }
  //   return capArray;
  // }
  // function capWords(word1){
  // //Seperate words in a string based on spaces
  //   let splitWords = word1.split(" ");
  //   let capArray = capitalWords(splitWords);
  //   let result = capArray.join(" ");
  //   return result;
  // }
  //
  // function getUserInput(){
  //   let input = prompt();
  //   return input;
  // }
  //
  //   console.log(capWords(getUserInput()));

 //functionExample("Hello", "World");
//function joined or concatenates words together
//console.log(capWords(word1));
//console.log(capWords(word2));
