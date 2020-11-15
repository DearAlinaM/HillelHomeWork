/* Заполнить массив размерностью n значениями с клавиатуры. 
Если введенное значение пользователя не число,
или отрицательное значение, то запросить повторный ввод данных. */

do {
  var value = prompt('Vvedite polozhytelnoe chislo', '');
  var anyNumber = parseInt(value);
} while (isNaN(anyNumber) || anyNumber < 0);

var animals = [];
animals.length = anyNumber;
var min = 1;
var max = 10;

for (var i = 0; i < animals.length; i++) {
  animals[i] = Math.round(Math.random(1) * (max - min) + min);
}
console.log(animals);
