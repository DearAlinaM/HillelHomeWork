/* Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
В переменной знак может быть: +, -, *, /, %, ^. 
Вывести результат математического действия, указанного в переменной znak. */

function plus(x, y) {
 return x + y;
}

function minus(x, y) {
  return x - y;
}


function doMath(x,y, callback) {
  if (!x || !y) {
    return console.log(' Vvedite chislo');
  };
  console.log(callback(x, y));

  
}

var test = doMath(3, 4, plus);


/*
function plus(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}
function umnozh(x, y) {
  return x * y;
}

function del(x, y) {
  return x / y;
}

function ostatok(x, y) {
  return x % y;
}

function stepen(x, y) {
  return x ** y;
}

function doMath(x, callback, y) {
  if (!x || !y) {
    return console.log(' Vvedite chislo');
  }
  return console.log(callback(x, y));
}

var test = doMath(3, minus, 4);*/


/*function umnozh(x, y) {
  return x * y;
}

function del(x, y) {
  return x / y;
}

function ostatok(x, y) {
  return x % y;
}

function stepen(x, y) {
  return x ** y;
}

if (znak === '*') {
    return console.log(umnozh(x, y));
  }
  if (znak === '/') {
    return console.log(del(x, y));
  }
  if (znak === '%') {
    return console.log(ostatok(x, y));
  }
  if (znak === '^') {
    return console.log(stepen(x, y));
  }*/


