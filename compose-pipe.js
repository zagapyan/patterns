const app = document.getElementById('app');

const pipe = (...args) =>
    value =>
        args.reduce( (a,b) => b(a), value);
const compose = (...args) =>
    value =>
        args.reduceRight( (a,b) => b(a), value);

const add = a => b => a + b;
const multiply = a => b => a * b;
const divideBy = a => b => b / a;
const square = a => a**2;

const meow = pipe(
    add(1),
    multiply(2),
    divideBy(5),
    square)
    (4);

const woof = compose(
    add(1),
    multiply(2),
    divideBy(5),
    square)(4);

app.innerHTML = JSON.stringify({
    meow,
    woof
});
