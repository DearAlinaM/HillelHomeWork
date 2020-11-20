// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// var rabbit = new Rabbit();

// alert( rabbit.eats ); // true


function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

// var rabbit = new Rabbit();
// console.log( Rabbit.prototype.eats );
// console.log( rabbit);
Rabbit.prototype = {};
var rabbit = new Rabbit();
// console.log( rabbit);

// console.log(Rabbit.prototype.eats);
console.log( rabbit.eats );

/// Результат: true. Свойство prototype всего лишь задаёт __proto__ у новых объектов. 
//Так что его изменение не повлияет на rabbit.__proto__.Свойство eats будет получено из прототипа.



// function Rabbit(name) {}
// Rabbit.prototype = {
//   eats: true
// };

// var rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats );

// function Rabbit(name) {}
// Rabbit.prototype = {
//   eats: true
// };

// var rabbit = new Rabbit();

// delete rabbit.eats; // (*)

// alert( rabbit.eats );

// function Rabbit(name) {}
// Rabbit.prototype = {
//   eats: true
// };

// var rabbit = new Rabbit();

// delete Rabbit.prototype.eats; // (*)

// alert( rabbit.eats );