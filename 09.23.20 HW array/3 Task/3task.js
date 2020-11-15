/*
Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
Найти максимальное число и минимальное число.
Элементы массива между min -- max записать в массив B.
 */

var a = [];
a.length = 10;

var min = 1;
var max = 10;

for (var i = 0, size = a.length; i < size; i++) {
  var random = Math.round(Math.random(1) * (max - min) + min);
  a[i] = random;
}

var maxV = a[0];
var minV = a[0];

var maxVi;
var minVi;

for (var i = 0, size = a.length; i < size; i++) {
  if (maxV < a[i]) {
    maxV = a[i];
    maxVi = i;
  }
}

for (var i = 0, size = a.length; i < size; i++) {
  if (minV > a[i]) {
    minV = a[i];
    minVi = i;
  }
}

console.log(a);

// console.log(minV);
console.log(minVi);

// console.log(maxV);
console.log(maxVi);

var newArray = [];

if (minVi < maxVi) {
  newArray = a.slice(minVi + 1, maxVi);
} else if (minVi > maxVi) {
  newArray = a.slice(maxVi + 1, minVi);
}
console.log(newArray);
