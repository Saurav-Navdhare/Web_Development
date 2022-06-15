function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i = 0; i<arr.length;i++){
      let flag = 1;
      for(let j = 0;j<arr[i].length;j++){
        if(arr[i][j]==elem){
        flag=0;
        break;
        }
      }
      if(flag==1){
        newArr.push(arr[i])
      }
    }
    // Only change code above this line
    return newArr;
  }
  
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops