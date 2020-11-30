/* 
Реализовать калькулятор, в котором есть слайдер (input type=”range”) и поле ввода (input type=”number”).
Изменяя состояние range меняется состояние поля ввода number. И наоборот.
Реализовать блок-диаграмму, который в пикселях будет отображать значение range. 
Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.

Красный блок - количество комиссии. Комиссия вычисляется по формуле:
(range < 20) -> 2%
(20 - 50)  -> 4%
(50 - 75)  -> 6%
(75 - 100)  -> 8%
Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px
*/

const range = document.querySelector('.rangeCl');
const numb = document.querySelector('.numberCl');
const com = document.querySelector('.comission');
const calc = document.querySelector('.calc');


function getCalc(a) {
    range.value = a;
    numb.value = a;
    com.style.height = `${comisCalc(a)}px`;
    calc.style.height = `${a}px`
}


range.oninput = numb.onchange = function () {
    getCalc(this.value);
}


function comisCalc(c) {
    let d;
    if (c <= 20 ) {
        d = c * 0.02;
    }
    else if (c <= 50 && c >= 21) {
          d = c * 0.04;
    }
    else if (c <= 75 && c >= 51) {
          d = c * 0.06;
    }
    else if (c <= 100 && c >= 76) {
          d = c * 0.08;
    }
    else {
        console.log('min = 0; max = 100')
    }    
    return d;
}
