/* 
В метод addRecord добавляется последний необязательный аргумент flag,
 который указывает приоритет присвоения свойств с одинаковым названием. 
 Если true - берется свойство из первоначального объекта this,
 если false - берется свойство из arguments. По умолчанию flag = false;

*/

function addRecord() {
    for (var i = 0; i < arguments.length; i++){
    for (var keyArg in arguments[i]) { 
      if (this[keyArg]) { 
        if ((arguments[arguments.length - 1]) === true) {
         arguments[i][keyArg] = this[keyArg];
        };
      };
      this[keyArg] = arguments[i][keyArg];
      };
  };
  return this;
}

var data2 = { bb: 101, aa: 105, ff: 107, gg: 103 };
var data = { aa: 12, a: 5, b: 7, c: 3 };

data.method = addRecord;
var test = data.method(data2, true);
console.log(test);

