/* Адаптировать функцию assignObjects() под
неопределенное количество объектов.

assignObjects(obj1, obj2, ....., objn); */


/* pop */

/* МОЙ ЧЕРНОВИК */



// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);

// function multiplyNumeric(any) {
//     let newObj = {};
//     newObj = menu;
//     console.log(newObj); 
//     for (var key in newObj) {
//          console.log(typeof(newObj[key])); 
//         if (typeof newObj[key] === 'number') {
//             newObj[key] *=2 ;
//             console.log(newObj[key]); 
//      }
//  }
// console.log(newObj); 
// };


// let user = new Object();
// user.name = 'AlinaP';
// console.log(user);
// let user1 = { name: 'Alina' };
// user1.sur = 'Molch';
// user1.age = 28; 
// console.log(user1);
// console.log(user1.age);
// user1.color = 'red'; 

// let key = prompt('', '');
// alert(user1[key]);  
// console.log(user1)


// function userMaker(name, age, hoho) {
//     return {
//         name: name,
//         age: age,
//         number: hoho,
//     };
    
// }

// let someUser = userMaker('kot', 3, 'lll');
// console.log(someUser.number);
// console.log(someUser);



//******** FOR EACH *********/



/*let testArray = [10, 20, 30, 40];
let newArray = [];

function forEach(target, callback) {
    for (let i = 0; i < target.length; i++){
          callback(target[i], i, target)
    }
};

function multToTen(element, i, arr) {
    console.log(element * 10);
    console.log(i * 100);
    console.log(arr);
}

var check = forEach(testArray, multToTen);
console.log(check);


testArray.forEach(i => {newArray.push(i*10)
    
});

var counter = 0;
var list = [{ name: 'user1', age: 20, }, { name: 'user2', age: 30, }, { name: 'user3', age: 15, }];
var getName = function(element) {
    newArray.push(element.age);
    counter += element.age;
}

list.forEach(getName);
console.log(newArray);
console.log(counter);*/


//*************FILTER******************** */


/*var someArray = [1, 3, 30, 4, 50];


let newArray = someArray.filter(function (element, index, array) {
    return index > 2;
//return element < 10;
});

console.log(newArray);*/

/*var filter = (target, callback) => {
    var newArray = [];

    for (var i = 0; i < target.length; i++) {
        var checked = callback(target[i], i, target);
        // console.log(checked);
        if (checked) {
            // console.log(checked);
            newArray.push(target[i]);
        }
    
    }
    console.log(newArray);
    return newArray;
}

var newArray = filter([1, 3, 30, 4, 50], predicate);
console.log(newArray);

function predicate(element, i, array) {
    return element < 10;
} */



//************* MAP ********** */

/*var anyArray = [1, 2, 3, 4];

var newArray = anyArray.map(function (element, index, array) { return element ** 2 });
console.log(newArray);*/

/*var mapCall = function (element) {
    return element * 2;
};

var map = (target, callback) => {
    const replica = target.concat([]);
    console.log(replica);

    for (let i = 0; i < replica.length; i++){
        replica[i] = callback(target[i], i, target);
        console.log(replica[i]);
    }

    return replica;
}

var newFoo = map(anyArray, mapCall);
console.log(newFoo);*/



//**************REDUCE ****************** */


var arrayR = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];

var foo = arrayR.reduce(function (acc, current) {
    
    return Object.assign(acc, {[current[0]]: current[1]})
}, {})

console.log(foo);



/*var arrayR = [1, 2, 3, 4, 5];
var foo = arrayR.reduce(function (acc, currentValue, currentI) {
    console.log('i = ', currentI, 'Value =', currentValue);
    console.log('acc = ', acc);
    return acc + currentI
}, 2
)
console.log('acc + currentI', foo);*/

/*function reduceMain(target, callback, defaultValue) {
    var hasDef = defaultValue !== undefined; // старт; стартовое значение либо указано, либо не undefined

    let accum = hasDef ? defaultValue : target[0];//аккум =если есть стартовое знач, то оно = аккум, либо первый эл.массива;
    // let accessAllowed = (age > 18) ? true : false;
    
    var from = hasDef ? 0 : 1; // откуда отсчет? если есть старт, то 0, если есть, то 1;

    for (var i = from; i < target.length; i++)
    {
       
        accum = callback(accum, target[i], i, target);
        console.log(accum);
    }
    return accum;

}

function reduceCall(accum, current, i, target) { 
    // return accum + current; 
    return Object.assign(accum, {[current[0]]: current[1]})
}


var arrayR = [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]];
var foo = reduceMain(arrayR, reduceCall, {});
console.log(foo);*/