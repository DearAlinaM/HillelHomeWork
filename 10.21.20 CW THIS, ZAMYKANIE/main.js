// var foo = 1; 

// function bar() { 
//     console.log(!foo); // true
//     console.log(foo); // undef == false 
//     if (!foo) {
//         var foo = 10; 
//     } 

//     console.log(foo); 
// } 

// bar();


// var a = 1; 

// function b() { 
//     //le = a : function=> 10;
//     a = 10; 
//     console.log(a);
//     return; 
//     function a() { } 
    
// } 


// b(); 
// console.log(a);


// function b() { 
//     a = 10;
//     console.log(a)
//     return; 
//     function a() {} 
// } 


// b(); 


// function b() { 
//    var a;

//     console.log(a)
//     return; 
//     function a() {} 
// } 


// b(); 


// function set(g) {
//     console.log(x);
//     g = 1;
//     console.log(x);
// }
// var x = 0;
// set(x);
// console.log(x);
// console.log(g);


// function addFruit(basket) {
//      basket[0] = "Apple";
// }


// var fruits = [];
// addFruit(fruits);
// console.log( fruits[0] );


// function makeFruit(basket) {
//       basket[0] = [ "Apple" ];
// }
// var fruits = [];
// makeFruit(fruits);
// console.log( fruits[0] ); 


// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ?
// alert( counter2() ); // ?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

// sum(1)(2) = 3
// sum(5)(-1) = 4

// function sumMain(a) {
//     return function (b) {
//         return a * b;
//     }
// }

// // var foo = sumMain(2);
// // console.log(foo(4));

// console.log(sumMain(2)(4))






//     a = 12;
// console.log(window);
//     console.log(a);

// var a = 18;

// function any() {
//     var  a = 12;
//     // console.log(a, '12');
// }
// any();

// console.log(window.a, 'window.a. обращение не к сущ-му ключу дает UNDEFINED');

// console.log(a, '18');

// function init() {
//     var i = 0;
//     console.log(i);
//     return function () {
//         console.log(++i);
//  }

// }

// var foo = init();

// foo();
// foo();
// foo();
// foo();




//***********           THIS ************** */


var userObj = { name: 'Alina', surname: 'Molchanova' };
var userObj2 = { name: 'Ivan', surname: 'Ivanov' };

function NameCreator() {
    this.a = 12;
    return this.name + ' ' + this.surname;
}


 
userObj.nameCre = NameCreator;// записываем метод nameCreator в объект
userObj2.nameCre = NameCreator;

// console.log(userObj);
console.log(userObj.nameCre());// вызом метода nameCreator в объекте userObj для userObj



// console.log(userObj.any);


//************************** */



