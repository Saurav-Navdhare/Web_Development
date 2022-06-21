// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    let newList = [...bookList];
    newList.push(bookName);
    return newList;

    // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
    let newList = [...bookList];
    const book_index = newList.indexOf(bookName);
    if (book_index >= 0) {

        newList.splice(book_index, 1);
        return newList;

        // Change code above this line
    }
}
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions