let value;
let a;

do {
  value = prompt('Допускается только ввод чисел', '');
  a = parseInt(value);
  console.log(a);
} while (isNaN(a));
