function truncateString(str, num) {
    if(str.length<=num){
    return str;
    }
    return str.slice(0,num)+'...';
  }
  
truncateString("A-tisket a-tasket A green and yellow basket", 8);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string