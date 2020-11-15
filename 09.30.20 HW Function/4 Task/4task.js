/* Создать функцию, которая убирает из строки все символы, 
которые мы передали вторым аргументом.
'func("hello world", ['l', 'd'])' вернет нам "heo wor" */

function toDel(testString, deletingSymbols) {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr[i] = arguments[i];
  }
  arr[0] = arr[0].split(''); // PHRASE
  console.log(arr[0]);
  for (var j = 0; j < arr[0].length; j++) {
    if (arr[1][0] === arr[0][j] || arr[1][1] === arr[0][j]) {
      delete arr[0][j];
    }
  }

  return arr[0];
}

var test = toDel('hello world', ['l', 'd']);
console.log(test);
