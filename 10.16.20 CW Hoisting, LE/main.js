
/*console.log(a);  // если не создана через var (даже ниже) то : a is not defined
a = 12; 
console.log(a); // 12
a = 17; 
console.log(a); // 17 
// var a = 15; 
console.log(a); // 15*/


// --------- VAR ------------

/*console.log(v,'var before'); // udefined 
var v = 1;
console.log(v,'var after'); // 1*/


// --------- LET ------------

/*console.log(l,'let before'); // can't access lexical declaration 'l' before initialization + 11 стока тоже не видна
let l = 2;
console.log(l, 'let after');*/ 

// -------- CONST ------------

/*console.log(c, 'const before'); // can't access lexical declaration 'l' before initialization + 11 стока тоже не видна
const c = 3;
console.log(c, 'const after');*/


// --------- func Declaration ------


//  console.log(funcDecl()); // undefined 
// console.log(g); //  g is not defined
// var g = 20; 
// funcDecl(); // вызывается без проблем
// console.log(g); 

// function funcDecl() {
//     console.log('function DEclaration');
//     // var g = 15; 
//     //   console.log(g, 'local G BEFORE'); 
//    var g = 25; 
//     // console.log(g, 'local G AFTER'); 
//     // return g;
// }
// funcDecl(); 

// console.log(g, 'gobal G'); 
// console.log(window.g, 'window G'); 
// вызывается без проблем
// console.log(g); 

/*funExp(); // funcExp is not a funcion

var funExp = function(){
    console.log('function express')
}

funExp(); // вызывается без проблем**/

/*function counter() {
    // LE = {a: undef, scope: window}
    let a = 0;

    // getCount(); 

    // console.log(a);
   // LE = {a: 0, scope: window}
  return function() {
           // LE = { scope: funcCounter}
      a++;
       console.log(a);
    };
    
   
   

}

let d = counter();
d();
d();*/

// function createCalc(a) {
//     b = 0;
//     // le = {a : 5, func;  scope window}
//     return function () {
//         b++;
//         //le = {b: 6; scope createCalc  }
//         return a * b;
    
//     }
// }

// var calc = createCalc(5);
// console.log(calc());
// console.log(calc());
// console.log(calc());



// var foo = 1; 
// function bar() { 
//     console.log(foo);
//     if (!foo) { 
//         var foo = 10; 
//     } 
//     console.log(foo); 
// } 
// bar();

// ---------------------------
// var a = 1; 
// function b() { 
//     a = 10; 
//     console.log(a);
//     return; 
//     function a() { };
          
// } 
// b(); 
// alert(a);

// ---------------------------
// var user = {
//   firstName: "Вася",
//   sayHi: function() {
//         alert( this.firstName );
//   }
// };

// setTimeout(user.sayHi, 1000);




