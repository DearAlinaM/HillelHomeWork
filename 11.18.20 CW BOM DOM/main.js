// ========= Browser Object Model

/*
console.log(window.innerHeight, 'window.innerHeight');
console.log(window.innerWidth, 'window.innerWidth');

console.log(window.location, 'window.location')

// location.reload()

//window.location.search.split('?')[1]; // "v=W6NZfCO5SIk"

const searchPar_1 = window.location.search.slice(1).split('&')[0];
console.log(searchPar_1, 'searchPar_1');
const searchPar_2 = window.location.search.slice(1).split('&')[1];
console.log(searchPar_2, 'searchPar_1');

const searchParam = new URLSearchParams(window.location.search.slice(1));
console.log(searchParam);

const queryPar = {};

for (let par of searchParam) {
    console.log(par);
    queryPar[par[0]]= par[1] ;
}
console.log(queryPar);

console.log(window.navigator);*/


// ======= Document Object Model

// console.dir(document, 'document');
// console.dir(document.body.children, 'document.body');
// console.dir(document.documentElement, 'documentElement HTML');
// document.body.style.backgroundColor = 'orange';

// const sayHello = (value) => {
//     this.value = value;
// console.log(`Hello ${this.value}`);
// }

// // sayHello('Alina');

// var color = 'green';
// setTimeout(
//     (color) => {
//         document.body.style.backgroundColor = this.color;
//         sayHello('World');
//     }, 5000
// )


// const getDivs = document.getElementsByTagName('div');
// console.log(getDivs);

// var newArr = Array.from(getDivs);
// console.log(typeof (newArr[0]));

// for (var div of getDivs) {
//     console.log(div);
// }

// const classTegs = document.getElementsByClassName('par');
// console.log(classTegs);

// const idTags = document.getElementById('anchor1')
// console.log(idTags);



// const querySelect = document.querySelector('.par');
// console.log(querySelect);

// const querySelectAll = document.querySelectorAll('.par');
// console.log(querySelectAll);

// const querySelectAllCheck = document.querySelector('.container.main div.sub p.par2');
// console.log(querySelectAllCheck );



// const querySelect_par = document.querySelector('.container.sub .par'); 
// console.log(querySelect_par.innerHTML);
// querySelect_par.innerHTML = '<strong>HoHo</strong>'; // izmenit soderzhymoe tega

// querySelect_par.innerText = '<strong>HoHo</strong>';

const querySelectInput = document.querySelector('input#logs');
console.log(querySelectInput)

// querySelectInput.value = 'Hello JS';

const p = querySelectInput.value;
console.log(p);


/*

var inp1 = document.querySelector('.input1').value;
document.querySelector('.input1').value = 'inp1';
// document.querySelector('.input1').value = '1111';

console.log(inp1)
inp1 = ' jjj'; // DOESN T WORK

const inp2 = 'looo';
document.querySelector('.input1').value = inp2 ;

*/