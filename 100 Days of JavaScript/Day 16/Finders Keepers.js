function findElement(arr, func) {
    let num = undefined;
    for(let i=0;i<arr.length;i++){
      if(func(arr[i])){
        return arr[i];
      }
    }
    return undefined;
  }
  
findElement([1, 2, 3, 4], num => num % 2 === 0);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers