/* (** Доп) Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. 
Нельзя использовать стандартный метод reverse(). 
Постарайтесь не использовать дополнительный массив. */

var array = [];
array.length = 5;

var random;

var max = 10;
var min = 1;

for (var i = 0, size = array.length; i < size; i++) {
  random = Math.round(Math.random() * (max - min) + min);
  array[i] = random;
}

console.log(array);

var array2 = [];
array2.length = array.length;

for (var i = 0, size = array.length; i < size; i++) {
  array2[i] = array[array.length - 1 - i];
}

console.log(array2);
