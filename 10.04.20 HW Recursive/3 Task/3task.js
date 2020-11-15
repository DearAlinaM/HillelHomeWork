/* Написать функция factorial(n) - 
которая при помощи рекурсии будет считать значение факториала числа n!*/

function factorial(n) {
  if (n === 0) {
   return console.log('net factoriala 0')
  };

  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

var fact_count = factorial(0);
console.log(fact_count);
