/* написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. 
Тот массив, сумма которого большая - должен вернутся функцией. */

function arrGenerator(size, min, max) {
  var arr = [];
  var size = size || 5;
  arr.length = size;
  return loop1(size, random, min, max);
}

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function loop1(length, callback, min, max) {
  var arr1 = [];
  min = min || 5;
  max = max || 25;
  for (var i = 0; i < length; i++) {
    arr1[i] = callback(min, max);
  }
  return arr1;
}

function sumCounter() {
  console.log(arguments);

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0, sum = 0; j < arguments[i].length; j++) {
      sum += arguments[i][j];
    }

    console.log(sum);

    var sumMax;
    var indMax;

    if (i === 0) {
      sumMax = sum;
      indMax = i;
      continue;
    }

    if (sum > sumMax) {
      sumMax = sum;
      indMax = i;
    }
  }

  return arguments[indMax];
}

var arrA = arrGenerator(5, 1, 5);
var arrB = arrGenerator(5, 1, 50);

var sumCompair = sumCounter(arrA, arrB);
console.log(sumCompair);
