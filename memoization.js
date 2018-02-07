/*
*  grabbed from http://www.penta-code.com/introduction-to-memoization-in-javascript/
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
  if (base){
    return raiseTo100Power._cache[base];
  }
  else return raiseTo100Power._cache;
}

console.log('raiseTo100Power(100): ',raiseTo100Power(100), '\n')
console.log('raiseTo100Power(101): ',raiseTo100Power(101), '\n')

console.log('raiseTo100Power(100) : ',raiseTo100Power(100),'\n')
console.log('raiseTo100Power(101) : ',raiseTo100Power(101),'\n')
console.log('raiseTo100Power({}) : ' ,raiseTo100Power(), '\n')