// Function to merge by selector from one array to another
// User can match a specific key of an object in the first array and match it to a key of an object in the second array;
// Second array will be added as a child node

const mergeBySelector = (arr1, selector1, arr2, selector2, nodeName) => {
  let combinedArray = [];
  arr1.forEach(obj1 => {
    arr2.forEach(obj2 => {
      obj1[selector1] === obj2[selector2] ?
        combinedArray.push(Object.assign(
          {},
          { ...obj1 },
          { [nodeName]: {...obj2} }
        ))
        : 0;
    })
  })
  return combinedArray;
}

const result = mergeBySelector(owners, 'id', pets, 'ownerId', 'pet');

document.getElementById('app').innerHTML = `<pre>${JSON.stringify(result, null,2)}</pre>`
