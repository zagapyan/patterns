class Ziggy{
  constructor(props){
    return{
      ...props,
      nope: this.nope,
      addOne: this.addOne
    }
  }
  static death(){
    return 'death'
  }
  static addOne(x){
    return x+1
  }
  addOne(x){
    return x+' one'
  }
  nope(){
    return 'not dead'
  }
}

class Pickles extends Ziggy{
  constructor(){
    super()
  }
}

console.log(Ziggy.death())
console.log(Ziggy.addOne(10))

const ziggy = new Ziggy({name: 'ziggy cat'});

console.log(ziggy.name);
console.log(ziggy.nope())
console.log(ziggy.addOne(1))


const pickles = new Pickles();
console.log(Pickles.addOne(12))
console.log(pickles.addOne(12));