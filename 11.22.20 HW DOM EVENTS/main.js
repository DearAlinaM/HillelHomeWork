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


function getCalc() {
    var cache;
    if (this.type === 'range') {
        cache = range.value;
        numb.value = cache;
    };
    if (this.type === 'number') {
        cache = numb.value;
        range.value = cache;
    };
    com.style.height = `${comisCalc(cache)}px`;
    calc.style.height = `${cache}px`
}


range.onmouseup = function () { 
    getCalc.call(range);
}

numb.onmouseup = function () {
    getCalc.call(numb);
}

// range.onmouseup = function () {
//     numb.value = range.value;
//     com.style.height = `${comisCalc(numb.value)}px`;
//     calc.style.height = `${numb.value }px`
// }

// numb.onmouseup = function () {
//     range.value = numb.value;
//     com.style.height = `${comisCalc(range.value)}px`;
//     calc.style.height = `${range.value}px`;
// }


function comisCalc(c) {
    var d;
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
