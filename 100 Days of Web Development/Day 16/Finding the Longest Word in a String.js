function findLongestWordLength(str) {
    let myArray = str.split(" ")
    let myMax = myArray[0].length
    for(let i=1;i<myArray.length;i++){
      if(myArray[i].length>myMax){
        myMax = myArray[i].length
      }
    }
    return myMax
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string