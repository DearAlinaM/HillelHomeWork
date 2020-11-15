/* 
    напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений,
     для которых предикат вернет true.

     var input = [1, 2, 3, 4, 5, 6];
     function isEven(x) { return x % 2 == 0; } // проверяет на четность
     console.log(filter(input, isEven)); // [2, 4, 6]

 */

var arrToCheck = [1, 2, 2, 4, 3, 5];
var filter_call = filter(arrToCheck, isEven);
console.log(filter_call);

function filter(input, callback) {
  if (!input) {
    return console.log('no array entered');
  }
  callback = isEven(input) || false;
  console.log(callback);

  if (isEven(input)) {
    var arr = [];
    var finalArr = [];
    for (var i = 0; i < arguments[0].length; i++) {
      arr[i] = arguments[0][i];
      if (arr[i] % 2 === 0) {
        finalArr.push(arr[i]);
      }
    }
    return finalArr;
  }
}

function isEven() {
  console.log(arguments);
  var arr = [];
  for (var i = 0; i < arguments[0].length; i++) {
    arr[i] = arguments[0][i];
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
}
