/* 
    Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). 
    При нажатии на Click - counter увеличивается. 
    При перезагрузке страницы counter должен сохраняться.

    Создать кнопку ClearCounters()

    Создать кнопку setCounter(), который запрашивает id блока 
    и устанавливает значение( в типе number ) в counter.
*/

let counterBox = document.querySelectorAll('.counterBox');
// console.log(counterBox);
counterBox.forEach(box => box.addEventListener('click', setChange));


const helperObj = {
    setToLS(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getFromLS(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

function getFromLS(boxes) {
    console.log(boxes)
    boxes.forEach(box => console.log(box.children[1].innerText = helperObj.getFromLS(box.dataset.value) ));
}
getFromLS(counterBox);


function setChange(e) {
    // console.log(e.target); // ивент
    // console.log(this); // конкретный див
    let counter = this.children[1];
    let but = e.target.closest('button');
    if (!but) {
        return
    };
    let key = `${this.dataset.value}`;
    helperObj.setToLS(key, ++counter.innerText);
}

let clearBut = document.querySelector('.clear');
clearBut.addEventListener('click', function () {
    localStorage.clear();
    getFromLS(counterBox);
});

let newValueBut = document.querySelector('.set');
// console.log(newValueBut);
newValueBut.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
     console.log(this);
})
