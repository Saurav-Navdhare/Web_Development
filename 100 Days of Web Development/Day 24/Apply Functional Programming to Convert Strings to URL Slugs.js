// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title
        .split(" ")
        .filter(substr => substr !== "")
        .join("-")
        .toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle);
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs