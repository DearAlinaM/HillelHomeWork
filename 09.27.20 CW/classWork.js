// let array = [];

// for (i = 1; i <= 5; i++) {
//   array[i - 1] = i;
// }

// console.log(array);

// let str = array.join('_ ');
// console.log(str);

/* 
for (j = 1, i = 0; i <= 5; j++, i++) {
  array[i] = j;
}

*/

// let array = [6, 7, 2, 3, 5, 7];
/*
document.write('<ul>');
for (i = 0; i < 5; i++) {
  document.write('<ul>' + array[i] + '</ul>');
}
document.write('</ul>');*/

// document.write('<ul><li>');
// document.write(array.join('</li><li>'));
// document.write('</li></ul>');

// let array = [1, 2, 3, 4, 5, 6];
// array.length = 6;
// middle = array.length / 2;

// array.splice(middle - 1, 2);

// var count = array.length % 2 == 0 ? 2 : 1;

/*var count = array.lenght %2 == 0? 1 :2   сколько элементов удалять, парынй или не парный массив*/
/*var position = (array.lenght /2)-1   -- что удалять;
array.splice(posiiton.count) удалить с позиции position COUNT элементов 

для непарных массивов 
var position2 = Math.floor(array.length/2) 
упрощаем-соединяем  формулу
position = Math.ceil(array.lenght/2)-1 

console.log(array);*/

// let arr = [1, 2, 3];
// // alert(arr.concat([4, 5]));

// for (let i = 0; i < 10; i++) {
//   arr.concat([i + 4]);
// }
// console.log(arr);


var mass = [
  { a: 2, b: 2 },
  { a: 20, b: 20 },
  { a: 200, b: 200 }
]
var mult = mass.reduce(function(accum, current)) {
  return accum* current; 
  };

