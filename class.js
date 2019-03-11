class Cat{
  constructor(name, age){
    this.name = name || 'ziggy';
    this.age = age || 32;
  }
  sayName(){
    return `hi my name is ${this.name} and I am ${this.age} years old`
  }
  static sayName(){
    return `hi i am cat`;
  }
}

const ziggyCat = new Cat();
const bebuCat = new Cat('bebu', 27);
console.log(ziggyCat.sayName());
console.log(bebuCat.sayName());
console.log(Cat.sayName())

class Tiger extends Cat{
  sayName(){
    return `Roar!! My name is ${this.name} and I am ${this.age} years old`
  }
  static sayName(){
    return `Roar!! I am tiger!!`
  }
}

const ziggyTiger = new Tiger();
console.log(ziggyTiger.sayName());
console.log(Tiger.sayName());
