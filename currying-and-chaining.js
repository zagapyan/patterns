const dragon = name =>
                size =>
                    element=>
                        `${name} is a ${size} dragon that breathes ${element}`;

const fluffykins = dragon('fluffykins')('two centimeter')('fart');
console.log(fluffykins);

const ziggy = dragon('ziggy');
console.log(ziggy('microscopic')('underwater'));

// CHAINING FUNCTIONS
chainable = function(value){
    let values = value || 0;

    this.add = ()=>{
        if(Array.isArray(values)){
            values = Object.assign([], values.map(o=>o+1));
            return this;
        }
        if(typeof values === "string"){
            values+='!!';
            return this;
        }
        if(typeof values === "number"){
            values+=1;
            return this;
        }
    }

    this.subtract = ()=>{
        if(Array.isArray(values)){
            values = Object.assign([], values.map(o=>o-1));
            return this;
        }
        if(typeof values === "string"){
            values-='!!';
            return this;
        }
        if(typeof values === "number"){
            values-=1;
            return this;
        }
    }

    this.getValue = ()=>values;

    return this;
}

const listOfNumbers = chainable;
const newSetList = listOfNumbers([1,2,3]);

console.log(newSetList.add().add().add().add().subtract().getValue());