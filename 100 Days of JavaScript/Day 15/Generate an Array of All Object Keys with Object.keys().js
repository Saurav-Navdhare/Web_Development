let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // change code below this line
    return Object.keys(obj);
    // change code above this line
  }
  
  console.log(getArrayOfUsers(users));
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys