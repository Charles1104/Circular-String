/*jshint esversion: 6 */

function circular(word, search) {

  dataValidation(word);
  dataValidation(search);

  word = word.toLowerCase();
  search = search.toLowerCase();
  word += word;

  match = "";
  counter = 0;

  for(let i = 0; i < (word.length) * 2; i++){
    if(word[i] === search[counter] && search[counter] !== undefined){

      counter++;
    }
  }
  console.log(counter);

  if (counter === search.length){
    return true;
  } else{
    return false;
  }
}

function dataValidation(data){
  if(typeof data !== "string"){
    throw new Error("Only string as argument");
  }
}

module.exports = circular;