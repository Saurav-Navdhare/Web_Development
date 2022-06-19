let funModule = (function () {
    return {
        isCuteMixin: function (Obj) {
            Obj.isCute = function () {
                return true;
            }
        },
        singMixin: function (Obj) {
            Obj.sing = function () {
                console.log("Singing to an awesome tune");
            }
        }
    }
})()

  // let isCuteMixin = function(obj) {
  //   obj.isCute = function() {
  //     return true;
  //   };
  // };
  // let singMixin = function(obj) {
  //   obj.sing = function() {
  //     console.log("Singing to an awesome tune");
  //   };
  // };
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module