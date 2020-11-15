/* 1. Написать функцию заполнения массива. Имя произвольное.*/

function doMass(size, min, max) {
  var arr = [];
  size = size || 5;
  min = min || -10;
  max = max || 100;

  for (var i = 0; i < size; i++) {
    arr[i] = Math.round(Math.random() * (max - min) + min);
  }

  return arr;
}

var array = doMass(0, 1);
console.log(array);
