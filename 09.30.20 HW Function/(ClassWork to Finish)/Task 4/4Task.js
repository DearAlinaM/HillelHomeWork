/*

Написать функцию, которая получает 3 аргумента: два числа и функцию. 
Произвести вызов переданной функции с двумя аргументами числами. doFunction(2, 3, power);
 в ответе должны получить 8, как 2 в степени 3.

Из п.3 реализовать функции sum, div, mul, power
doFunction(16, -23, mul); // 16*(-23)
 */

function doFunction(x, y, callback) {
  return callback(x, y);
}

var test = doFunction(16, -23, mul);
console.log(test);

function power(x, y) {
  return x ** y;
}

function sum(x, y) {
  return x + y;
}
function div(x, y) {
  return x / y;
}
function mul(x, y) {
  return x * y;
}
