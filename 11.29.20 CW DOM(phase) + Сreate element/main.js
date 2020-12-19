// let div = document.createElement('div');
// div.innerText = 'hello from JS';
// document.body.append(div);


// let a = document.createElement('a');
// a.innerText = 'hello A';
// a.style.color = 'red';
// a.style.display = 'block';
// let sec = document.querySelector('section.first');
// console.log(sec);

// setTimeout(
//     // ()=> sec.append(a), 1000 // v konec
//     // () => sec.prepend(a), 1000 // v nachalo
//      ()=> sec.after(a), 1000 // posle elementa // before - do
//     //  ()=> sec.appendChild(a), 1000 // node! tolko uzly. просто тектс не втставит
// )

/*
let goods = [
    { name: 'banana', price: 20, color: 'black', bool: true },
    { name: 'apple', price: 30, color: 'grey', bool: true },
    { name: 'pineapple', price: 70, color: 'green', bool:false },
    { name: 'lemon', price: 45, color: 'orange' , bool: false},
    { name: 'peach', price: 25, color: 'yellow', bool: true },
];


// const sec = document.createElement('section');
const frag = document.createDocumentFragment();

for (const item of goods) {
    const div = document.createElement('div');
    div.classList.add('greenDiv');
    div.innerHTML=` ${item.name}`;
    // sec.append(div);
    frag.append(div);
}
  document.body.append(frag);*/

  //----------------Boobles

const div1 = document.querySelector('.first');
console.log(div1);
const div2 = document.querySelector('.sec');
const div3 = document.querySelector('.third');

div1.addEventListener('click', function (event) {
    this.classList.add('firstCl');
    console.log(event.target, 'div1 event target');
});
div2.addEventListener('click', function (event) {
    this.classList.add('secCl');
    // console.log(event.target, 'div2 event target');
});
div3.addEventListener('click', function (event) {
    this.classList.add('thirdCl');
    // console.log(event.target, 'div3 event target');
});
