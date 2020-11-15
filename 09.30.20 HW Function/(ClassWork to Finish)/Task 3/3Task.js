/* Написать функцию, которая получает 3 аргумента: два числа и функцию. 
Произвести вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
 в ответе должны получить 8, как 2 в степени 3. */

function doFunction(x, y, callback) {
  return callback(x, y);
}

var test = doFunction(2, 3, power);
console.log(test);

function power(x, y) {
  return x ** y;
}
