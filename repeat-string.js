function repeatString(times, string){
  let stringArray = [];
  for(let i = 0; i < times; i++){
    stringArray.push(string);
    i++;
  }
  return stringArray.join(' ');
}

document.getElementById('app').innerHTML = repeatString(20, 'meow!!!');
