function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () { `nom nom nom` }
};
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself