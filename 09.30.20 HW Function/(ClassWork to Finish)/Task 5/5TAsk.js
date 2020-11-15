/* 
Реализовать функцию copy(list) по копированию массива. */

function copy(list) {
  console.log(arguments);
  var newArray = [];
  for (var i = 0; i < arguments[0].length; i++) {
    newArray[i] = arguments[0][i];
  }
  // console.log(newArray);
  return newArray;
}

var massivA = ['a', 'b', 'c', 'd'];
var new_copy = copy(massivA);
// console.log(new_copy);

new_copy.push('MM');
console.log(new_copy);
console.log(massivA);
