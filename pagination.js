// this is how you would potentially write pagination
const objectList = []
const limit = 100

for(let i = 0; i < limit; i++){
  objectList.push({value: (_ => Math.random(Math.floor(Math.random() * (10 - 0)) + 0))()})
}

let from = 4
let size = 12

const getRangeFromList = (list, from, size) => list.slice(from, from+size)

let pagination = getRangeFromList(objectList, from, size)
console.log(pagination)
console.log('\n');
console.log(`startingPoint:`, objectList[from])
console.log(`endPoint:`, objectList[from+size])