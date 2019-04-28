function removeDuplicates(array){
  let exists = {}
  let dedupedArray = [];

  for(let i = 0; i < array.length; i++){    
    if(!exists[array[i]]){
      exists[array[i]] = true;
    }
  }
  
  for( key in exists ){
    dedupedArray.push(key);
  }

  return dedupedArray;
}

document
  .getElementById('app')
  .innerHTML = JSON.stringify(removeDuplicates([1, 3, 2, 5, 4, 3, 3, 4, 1, 6, 6, 1, 4, 10]))
