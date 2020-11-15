/*
Предусмотреть возможность передачи вторым аргументом функции. 
При копировании массива - функция применится к каждому элементу копируемого массива. 
newL = copy(list, function(value){ return value*10; }) */

var massivA = [11, 22, 33, 44];
var new_copy = copy(massivA, umnozh);
console.log(new_copy);

function copy(list, callback) {
  if (!arguments[1]) {
    var newArray = [];
    for (var i = 0; i < arguments[0].length; i++) {
      newArray[i] = arguments[0][i];
    }
    console.log(newArray);
    return newArray;
  } else {
    return callback(massivA);
  }
}

function umnozh(value) {
  var newArray = [];
  for (var i = 0; i < arguments[0].length; i++) {
    newArray[i] = arguments[0][i] * 10;
  }
  return newArray;
}
