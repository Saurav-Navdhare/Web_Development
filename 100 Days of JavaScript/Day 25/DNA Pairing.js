function pairElement(str) {
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    var arr = str.split("");
    return arr.map(x => [x, pairs[x]]);
}
pairElement("GCG");
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing