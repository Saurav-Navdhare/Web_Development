let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function (Obj) {
    Obj.glide = function () { console.log("Glide"); }
}
glideMixin(bird);
glideMixin(boat);
  // Only change code below this line
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects