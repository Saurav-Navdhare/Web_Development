const squareList = arr => {
    // Only change code below this line
    function myFunc(myNum) {
        if (myNum % 1 === 0 && myNum > 0) {
            return myNum ** 2;
        }
    }
    let newList = arr.map(myFunc).filter(val => val != undefined)
    return newList;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem