function sumAll(arr) {
    let smaller = arr[0];
    let bigger = arr[1];
    if (arr[0] > arr[1]) {
        smaller = arr[1];
        bigger = arr[0];
    }
    let sum = (bigger * (bigger + 1) / 2) - (smaller * (smaller - 1) / 2)
    return sum;
}

sumAll([1, 4]);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range