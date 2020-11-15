/* 
    Создать двумерный массив, заполненный случайными числами в любом диапазоне.

    Найти колонку, где сумма элементов наименьшая.
    Найти колонку, где сумма элементов найбольшая.
 */

var twoDem = [];

twoDem.length = 5;

for (var i = 0, size = twoDem.length; i < size; i++) {
  twoDem[i] = new Array(size);

  for (var j = 0, sum = 0; j < twoDem[i].length; j++) {
    var random = Math.round(Math.random(1) * (9 - 1) + 1);
    twoDem[i][j] = random;
  }
}

console.log(twoDem);

var maxSum;
var minSum;

for (var j = 0, sum = 0; j < twoDem.length; j++) {
  for (var i = 0, sum = 0, size = twoDem[j].length; i < size; i++) {
    sum += twoDem[i][j];
  }
  console.log(sum);
  if (j === 0) {
    maxSum = sum;
    minSum = sum;
  }

  if (sum < minSum) {
    minSum = sum;
  }
  if (sum > maxSum) {
    maxSum = sum;
  }
}

console.log(maxSum);
console.log(minSum);
