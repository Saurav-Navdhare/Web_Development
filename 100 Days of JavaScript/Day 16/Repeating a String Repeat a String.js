function repeatStringNumTimes(str, num) {
    if(num<0){
      return "";
    }
    let newstr="";
    for(let i=0;i<num;i++){
      newstr += str;
    }
    return newstr;
  }
  
repeatStringNumTimes("abc", 3);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string