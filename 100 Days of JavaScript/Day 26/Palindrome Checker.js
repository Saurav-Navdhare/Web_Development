function palindrome(str) {
    let str_1 = str.toLowerCase().replace(/[\W_]/g, '');
    let str_2 = str_1.split('').reverse().join('');
    return str_1 === str_2 ? true : false;
}
palindrome("eye");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker