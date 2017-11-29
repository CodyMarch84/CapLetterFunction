function capWords(word1){
//Seperate words in a string based on spaces
  let splitWords = word1.split(" ");
  let capArray = [];
for (let i = 0;i < splitWords.length; i++){
  let word =  splitWords[i];
  let capWord = word[0].toUpperCase() + word.slice(1);
  capArray.push(capWord);
}
  let result = capArray.join(" ");
  return result;
}

function getUserInput(){
  let input = prompt();
  return input;
}

  console.log(capWords(getUserInput()));

  // let input = prompt();
  // let txt= capWords(input);
  //
  // console.log(txt);

 //functionExample("Hello", "World");
//function joined or concatenates words together
//console.log(capWords(word1));
//console.log(capWords(word2));
