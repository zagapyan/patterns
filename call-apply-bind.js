/*
* =========================================
* HERE IS THE TEXTBOOK DEFINITION OF CALL
* =========================================
*/

const obj = { num : 2 };

// this has to be a non-arrow function expression, or else `this` won't work
const addToThis = function(a){
  return this.num+a
};
newObj = addToThis.call(obj, 2) // should return newObje = { num : 4 }
console.log(newObj);

// another example
const felix = {
  type: 'cat',
  sound: 'meow'
}
const garfield = {
  type: 'cat'
}
const silvester = {
  type: 'cat'
}





/*
* =========================================
* SOME BETTER EXAMPLES OF OF CALL FUNCTIONS
* =========================================
*/
const makeSound = function(sound){
  // if sound is not defined in called object;
  let ifSound = this.sound ? this.sound : sound;
  
  // safeguarding if nothing is passed in 
  if (!ifSound){
    ifSound = 'hisssss!';
  }
  return `The ${this.type} says ${ifSound}`;
}

// here are some examples of call functions
console.log(makeSound.call(felix, 'purr'));
console.log(makeSound.call(garfield, 'purr'));
console.log(makeSound.call(silvester))