const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this 
    let count = 0;
    for(let user in usersObj){
      if(usersObj[user]['online']){count++}
    }
    return count
    // Only change code above this line
  }
  
console.log(countOnline(users));
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement