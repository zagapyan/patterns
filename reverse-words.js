function reverseWords(strings){
  let reversedWordsArray = [];
  let splitStrings = strings.split(" ");
  for(let i = splitStrings.length-1 ; i>=0; i--){
    reversedWordsArray.push(splitStrings[i]);
  }
  return reversedWordsArray;
}

document.getElementById('app').innerHTML = JSON.stringify(reverseWords('I fucking love cats!'));
