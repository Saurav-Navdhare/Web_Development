function confirmEnding(str, target) {
    let re = new RegExp(target + "$", "i");
    return re.test(str);
  }
  
confirmEnding("Bastian", "n");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending