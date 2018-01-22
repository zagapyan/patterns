// Basic Composition Pattern

const compose = (a,b) => c => b(a(c))

const exclaim = a => a+'!'
const greet = a => 'Hello, '+a

const greetExclaim = (name)=> compose(greet, exclaim)(name)

const sayHiZiggy = greetExclaim('Ziggy')

console.log(sayHiZiggy)
