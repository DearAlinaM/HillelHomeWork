let n = prompt('Введите число для вычисления факториала', '');
let res = 1;
for (a = 1; a <= n; a++) {
  res = res * a;
  console.log(res);
}
console.log(res);
alert('Факториал из ' + n + ' ' + '=' + ' ' + res);
