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