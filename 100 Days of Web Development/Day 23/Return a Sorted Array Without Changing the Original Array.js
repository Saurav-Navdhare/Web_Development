const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  return ((arr.slice()).sort(function (a,b) {return a-b}));

  // Only change code above this line
}

nonMutatingSort(globalArray);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/return-a-sorted-array-without-changing-the-original-array