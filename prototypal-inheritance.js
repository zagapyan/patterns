// THIS IS A SUBCLASS, If a subclass,
// if a subclass has a method of the same name, it uses that instead.
// If not, then it'll keep moving up the prototype tree till it finds one.
function Cat(cat){
  this.name = cat || 'cat'
}
Cat.prototype.sayName = function(){
  return this.name
}
const pickles = new Cat('Pickles')
const pepper = new Cat('Pepper')
console.log(pickles.sayName());
console.log(pepper.sayName());


// THIS IS A SUBCLASS, If a subclass,
// if a subclass has a method of the same name, it uses that instead.
// If not, then it'll keep moving up the prototype tree till it finds one.
const SuperCat = function(name){
  Cat.call(this);
  this.name  = name || this.name;
}
SuperCat.prototype = Object.create(Cat.prototype)
SuperCat.prototype.constructor = SuperCat;
SuperCat.prototype.sayName = function(){
  return 'I am super' +this.name+'!!!'
}
const superPickles = new SuperCat('FLUFFERS');
const superPepper = new SuperCat('WHISKIES');
console.log(superPickles.sayName())
console.log(superPepper.sayName())