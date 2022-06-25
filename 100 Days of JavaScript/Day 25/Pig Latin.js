function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
}

translatePigLatin("consonant");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin