/*
Есть 3 input. Выводить в textarea содержимое всех полей ввода через запятую. Использовать setInterval.
*/


const d = document.querySelector('#textArea');
const inpSel = document.querySelectorAll('input');


var str = '';
for (const inputs of inpSel) {
  str += inputs.value + ', ';
}


setInterval(
    () => { 
    d.value = str;
  }, 2000
)
