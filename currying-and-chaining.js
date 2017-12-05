// CURRYING FUNCTIONS
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
    this.value = value || 0;

    this.add = ()=>{
        if(Array.isArray(value)){
            this.value = Object.assign([], this.value.map(o=>o+1));
            return this;
        }
        if(typeof value === "string"){
            this.value+='!!';
            return this;
        }
        if(typeof value === "number"){
            this.value+=1;
            return this;
        }
    }

    this.subtract = ()=>{
        if(Array.isArray(value)){
            this.value = Object.assign([], this.value.map(o=>o-1));
            return this;
        }
        if(typeof value === "string"){
            this.value = this.value.slice(0,-1);
            return this;
        }
        if(typeof value === "number"){
            this.value-=1;
            return this;
        }
    }

    this.getValue = ()=>this.value;

    return this;
}

// with arrays
const listOfNumbers = chainable;
const newSetList = listOfNumbers([1,2,3]);
console.log(newSetList.add().add().add().add().subtract().getValue());

// with numbers
const numberOne = chainable(1);
console.log(newSetList.add().add().add().add().subtract().getValue());

// with strings
const z00gie = chainable('z00gie');
console.log(z00gie.add().add().subtract().getValue());