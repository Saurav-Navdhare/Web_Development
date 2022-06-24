function checkPositive(arr) {
    // Add your code below this line
    return arr.every(function (value) {
        return value > 0;
    });
    // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria