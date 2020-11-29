/*let text = document.querySelector('.text1');
// let fontColorR = 'red';
// let fontColorG = 'green';
const fontSize1 = 30;
// const fontSize2 = 20;
text.style.fontSize = fontSize1 + 'px';
// text.style.color = fontColorR;


setInterval(() => {
    // let textFontS = Math.floor(Math.random() * 60);
    // text.style.fontSize = `${textFontS}px`;
//    text.classList.add('box2');
    text.classList.toggle('box2');
    //    text.classList.replace('box1', 'box2');

}, 2000
)   */

// === practice

/*
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
// console.log(random(1, 10));
const randomColor = () => `rgb(${random(1, 120)},${random(1, 120)},${random(1, 120)} )`;
let box = document.querySelectorAll('.box1');
// box.style.backgroundColor = randomColor();
// console.log(randomColor());

function move(_boxes) {
    var cache = {
        cordX: random(1, 100),
        cordY: random(1, 100),
      
    };

      console.log(cache.cordX,cache.cordY,'cache.cordX,cache.cordY' )

    for (var box1 of _boxes) {
        console.log(box1);
        box1.style.left = `${ random(1, 100)}px`;
        box1.style.top = `${ random(1, 100)}px`;
    }

}

move(box);

// setInterval(
//     () => {
//         box.style.backgroundColor = randomColor();
//     }, 2000
// )
*/


// ============== EVENTS

/*
const box = document.querySelector('.text3');
box.style.backgroundColor = 'red';
// console.log(box);
box.onclick = function () {
    console.log(this);
    this.classList.toggle('boxY');
};
box.onmousemove = function () {
    console.log('moving')
}
box.onmouseenter = function () {
    console.log('entering');
     box.style.backgroundColor = 'yellow';
}
box.onmouseleave = function () {
    console.log('entering');
    box.style.backgroundColor = 'black';
}
*/

//==== cords

const box = document.querySelector('.text3');
// box.onclick = function () {
//     console.log('click1');
// } 

// box.onclick = function () {
//     console.log('click2');
// } 

/*
box.addEventListener('click', function () { console.log('click') });
box.addEventListener('click', function () { console.log('another click') });
box.addEventListener('mousemove', function () { console.log('moving') });*/

// box.addEventListener('click', function (e) { console.log(e, 'event') });

function eventF (e) {
    console.log(e.type);
}


box.addEventListener('click',eventF );

box.addEventListener('contextmenu', eventF );