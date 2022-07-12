function add(x) {
    // Add your code below this line
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
    // Add your code above this line
}
add(10)(20)(30);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application