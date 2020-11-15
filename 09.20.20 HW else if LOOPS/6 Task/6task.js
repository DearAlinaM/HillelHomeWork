// (Доп) Ввести с клавиатуры 2 числа a и b(где a < b).
// Запустить цикл перебора от a до b.

// let a = prompt('Vvedite chislo A', '');
// let b = prompt('Vvedite chislo B', '');
// res = 1;
// summ = 0;
// for (i = a; i < b; i++) {
//   // console.log(i);
//   res = i ** 2;
//   console.log(res);
//   summ = summ + res;
// }
// console.log(summ); сумму считала для себя

/*Вывести в консоль квадраты чётных чисел.*/
let a1 = prompt('Стартовое число А', '');
let b1 = prompt('Конечное число Б', '');
let res1 = 1;
let summ1 = 0;
for (i = a1; i <= b1; i++) {
  // console.log(i);
  if (i % 2 === 0) {
    // console.log(i);
    res = i ** 2;
    confirm('Вывод квадратных корней четных чисел в консоли');
    console.log(res);
  }
}
