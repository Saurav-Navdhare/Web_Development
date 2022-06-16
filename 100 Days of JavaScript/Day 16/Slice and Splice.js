function frankenSplice(arr1, arr2, n) {
    let myArr = arr2.slice()
    myArr.splice(n,0,...arr1)
    return myArr;
  }
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice