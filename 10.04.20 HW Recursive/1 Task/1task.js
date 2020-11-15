/* Вывести в консоль последовательность чисел в обратном порядке, 
используя рекурсивный вызов функиции
row (5) // 5 4 3 2 1 */

function reverse(n) {
  console.log(n);

  if (n === 0) {
    return console.log(' recursiya zakonchilas');
  }
  reverse(n - 1);
}

var newRev = reverse(5);
