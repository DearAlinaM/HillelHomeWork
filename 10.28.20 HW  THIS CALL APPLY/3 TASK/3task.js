/*

var user = {name: 'Алексей'}

function func(surname, patronymic) 
{ alert('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname); }

//Тут напишите конструкцию с bind()

func('Николаев', 'Иванович'); 
//тут должно вывести 'привет, Алексей Иванович Николаев '

    Напишите в указанном месте конструкцию с методом bind() так, 
    чтобы this внутри функции func всегда указывал на объект user.


*/

// var user = { name: 'Алексей' };

// function func(surname, patronymic) {
//     console.log('привет' + ' ' + this.name + ', ' + patronymic + ' ' + surname);
//     console.log(this);
// }

// var test = func.bind(user); 
// test( 'Николаев', 'Иванович');



function sayHi() {
    // console.log(this.name + ' , Hi!');
    console.log(this)
}



var person = {
    name: 'Petya',
    age: 18,
    // say: sayHi,
    girl :{
        name: 'Tanya',
        age: 20,
    },
    sayBye: function (pets, films) {
        console.log(this.name + ' BYE');
        console.log(pets);
        console.log(films);
    }
};

var testPetya = sayHi.bind(person);
// testPetya();

var testTanya = sayHi.bind(person.girl);
// testTanya();

var person2 = {
    name: 'Anya',
    age: 25,
};

// var testAnya = sayBye.bind(person2);
// testAnya();
var testAnya = person.sayBye.bind(person2, 'cat', 'friends');
testAnya();


var arr = [1, 2, 3, 4];

// function mult(arr, n) {
//     return arr.map(
//         function (e) {
//             return e * n;
//         }
//     )
// };

//console.log(mult(arr, 2));

