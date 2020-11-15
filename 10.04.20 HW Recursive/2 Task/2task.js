/* Написать рекурсивную функцию sumTo(n), 
которая для данного n вычисляет сумму чисел от 1 до n, например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6 */

function toSum(n) {
  if (n === 1) {
    return n;
  }
  return n + toSum(n - 1);
}

var toSum_count = toSum(5);
console.log(toSum_count);
