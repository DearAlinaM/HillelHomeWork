/*
Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.
*/

const a = document.querySelector('.input1').value;
const b = document.querySelector('.input2').value;
const c = document.querySelector('.input3').value;


setTimeout(
    () => { 
      document.querySelector('textarea').value = `${a}, ${b}, ${c}`;
    },2000
)