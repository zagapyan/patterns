/*
*   µgrabbed from http://www.penta-code.com/introduction-to-memoization-in-javascript/
*/

//Javascript Memoization
var raiseTo100Power = function(base) {
  raiseTo100Power._cache = raiseTo100Power._cache || {};
  if (!raiseTo100Power._cache[base]) {
    console.info('Not found in cache, performing expensive operation and storing in cache');
    var result;
    result = Math.pow(base, 100);
    raiseTo100Power._cache[base] = result;
  }
  return raiseTo100Power._cache[base];
}

console.log(raiseTo100Power(100))
console.log(raiseTo100Power())