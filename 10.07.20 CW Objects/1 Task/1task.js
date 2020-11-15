/* Создать объект с такой структурой: 
obj = { a: 10, b: 12, c: { f: 13, g: { m: 20} } } 
Написать функцию convert(obj), он получает аргументом obj. 
Функция должна вернуть новый объект: 
newObj = { a: 10, b: 12, f: 13, m: 20 }*/

var object = {
    a: 10,
    b: 12,
    c: {
        f: 13,
        g:
            { m: 20 }
    }
};

var convertered = convert(object);
console.log(convertered);

 

function convert(obj, clone = {}) {
    for (var key in obj) {
            
            // console.log(typeof obj[key]);
            if (typeof obj[key] === 'object'&&  !Array.isArray(obj[key])&& obj[key] != null) {
                console.log(obj[key]);
                 convert(obj[key], clone);
            }
            else {
                clone[key] = obj[key];
            }
        }
        // console.log(clone);
         return clone;
 }
   



