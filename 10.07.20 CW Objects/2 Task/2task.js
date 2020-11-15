/* 
Написать функцию assignObjects(obj1, obj2),
которая принимает аргументами 2 обьекта и возвращает новый,
который состоит из свойство обоих обьектов (склеить). 
Если свойство повторяется, то взять значение второго обьекта

assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
 */

var obj1 = { x: 10 };
var obj2 = { x: 20, y: 30 };
// var obj3 = { k: 80, m: 5 };


var newObj = assignObjects(obj1, obj2);
console.log(newObj);

 
function assignObjects(obj1, obj2, obj3) {
    var newObj = {};
    // console.log(arguments);
    for (var i = 0; i < arguments.length; i++){
        // console.log(arguments[i]);
        if (typeof (arguments[i]) === 'object' && !Array.isArray(arguments[i])&& arguments[i] != null) {
            // console.log(arguments[i], 'eto Object')
             for (var keyArg in arguments[i]) {
             
                newObj[keyArg] = arguments[i][keyArg];   
                //    console.log(newObj)
            }
       }
       
    }
    return newObj;
 }

console.log(typeof (null));

