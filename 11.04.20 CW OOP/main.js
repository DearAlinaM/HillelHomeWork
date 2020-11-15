// function Animal(name) {
//     hiddenType = 'house'; 
//     this.age = 5;
//     this.name = name;
//     console.log(this);
// }

// var cat = new Animal('Murzik');
// console.log(cat);   

// function User(firstName, age) {
//     // this.firstName = prompt('name', '');
//     this.firstName = firstName ;
//     // this.lastName =  prompt('LastName', '');
//     this.age= age ;

//     console.log(this);
// }

// var person1 = new User ('Valera', 30);
// console.log(person1);


// var team = [];

// for (i = 0; i < 2; i++){
//     var player = new User(
//         prompt('name', ''),
//         prompt('age', ''),
//     );
//     team.push(player) ;
//     console.log(team);
// };

// console.log(team);

function HTMLElement(tagName) {
    this.tagName = tagName;
    // this.render = function () {
    //     console.log(this, 'this in render')
    // }

    this.render();
}

HTMLElement.prototype.render = function () {
    console.log(this, 'render this')
}

// console.log(HTMLElement);
 
var a = new HTMLElement('a');
// var img = new HTMLElement('img');

// console.log(a);

// a.render();
// console.log(img);

// var rabbit = {
//     eat: true,
// };

// var cat = {
//     run : true,
// }

// rabbit.__proto__ = cat;

// console.log(rabbit.run);
// console.log(rabbit);

// for (var key in rabbit) {
//     if (!rabbit.hasOwnProperty(key)) continue;
//     console.log(key);
// }


// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };


// Rabbit.prototype = {
//     eats: false
// };

// console.log(Rabbit);

// var rabbit = new Rabbit();
// console.log(rabbit.eats);