function reverseString(str) {
    let reverseArray = str.split("");
    reverseArray = reverseArray.reverse()
    return reverseArray.join("")
  }
  
reverseString("hello");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string