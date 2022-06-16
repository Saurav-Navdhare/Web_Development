function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
  
getIndexToIns([40, 60], 50);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong