/*
Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.
*/


const a = document.querySelector('#input1');
const b = document.querySelector('#input2');
const c = document.querySelector('#input3');
const d = document.querySelector('#textArea');

setInterval(
    () => { 
    d.value= `${a.value}, ${b.value}, ${c.value}`;
    }, 2000
)