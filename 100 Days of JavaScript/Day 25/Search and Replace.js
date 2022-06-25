function myReplace(str, before, after) {
    const strArr = str.split(" ");
    const [wordToReplace] = strArr.filter(item => item === before);
    const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
        ? after[0].toUpperCase() + after.slice(1)
        : after[0].toLowerCase() + after.slice(1);
    return strArr.map(item => (item === before ? replacement : item)).join(" ");
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace