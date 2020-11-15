/* Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
Заменить каждый элемент массива с нечетным индексом на ноль. */

var fruits = [];

fruits.length = 5;

var min = 1;
var max = 10;

for (var i = 0, size = fruits.length; i < size; i++) {
  var random = Math.round(Math.random() * (10 - 1) + 1);
  fruits[i] = random;

  if (fruits[i] % 2 > 0) {
    fruits[i] = 0;
  } else if (fruits[i] % 2 === 0) {
    fruits[i] = random;
  }
}
console.log(fruits);
