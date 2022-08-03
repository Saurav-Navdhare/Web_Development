const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
    return a-b;
}
const mul = (a,b)=>{
    return a*b;
}
const div = (a,b)=>{
    return a/b;
}
const mod = (a,b)=>{
    return a%b;
}
const exp = (a,b)=>{
    return a**b;
}
const PI = 3.14;
module.exports = {  //exporting functions Way 1, here we can only access functions using their orignal names
    add,
    sub,
    mul,
    div,
    PI
}
module.exports.mod = mod; //exporting functions Way 2
module.exports.exp1 = exp;//here we can alter the way function can be called