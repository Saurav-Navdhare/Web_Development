function nonMutatingSplice(cities) {
    // Only change code below this line
    if (cities.length < 3) {
        return cities.slice();
    }
    return cities.slice(0, 3);

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/remove-elements-from-an-array-using-slice-instead-of-splice