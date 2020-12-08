console.log(window.localStorage);

localStorage.setItem('heyItem1', 'itemValue');
document.body.innerText = localStorage.getItem('heyItem1');
localStorage.setItem('heyItem2', 'itemValue2');

for (let i in localStorage) {
    // console.log(localStorage[i]);
    if (localStorage.hasOwnProperty(i)) {
        console.log(localStorage[i])
    };
    
    // localStorage.hasOwnProperty(i);
}

// let obj = {
//     a: 2,
//     b: 12,
//     c : ['av', 'd', 'v']
// }

// let newJ = JSON.stringify(obj);
// console.log(newJ);

// localStorage.setItem('myObj', JSON.stringify(obj));

let JSON_FROM_LS = localStorage.getItem('myObj');
console.log(JSON_FROM_LS)
document.body.innerText = localStorage.getItem('myObj');

let deSer = JSON.parse(localStorage.getItem('myObj'));
console.log(deSer);