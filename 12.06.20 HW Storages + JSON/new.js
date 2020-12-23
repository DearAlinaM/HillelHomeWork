// /* 
//     Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). 
//     При нажатии на Click - counter увеличивается. 
//     При перезагрузке страницы counter должен сохраняться.

//     Создать кнопку ClearCounters()

//     Создать кнопку setCounter(), который запрашивает id блока 
//     и устанавливает значение( в типе number ) в counter.
// */


// let secCounterBox = document.querySelectorAll('section');
// secCounterBox.forEach(function (counterBox) {
//     let counters = counterBox.childNodes;
//     console.log(counters);
//     counters.forEach(function (e) {
//         console.log(e);
//         if (e.nodeType === 1) {
//             e.addEventListener('click', setChange)
//         }
//     })
//     }
// );


// const helperObj = {
//     setToLS(key, value) {
//         localStorage.setItem(key, JSON.stringify(value));
//     },
//     getFromLS(key) {
//         return JSON.parse(localStorage.getItem(key));
//     }
// }

// function getFromLS(box) {
//     box.children[1].innerText = helperObj.getFromLS(box.dataset.value);
// }


// secCounterBox.forEach(function (counterBox) {
//     let counters = counterBox.childNodes;
//     counters.forEach(function (e) {
//         if (e.nodeType === 1 && e.tagName === 'DIV') {
//            getFromLS(e);
//         }
//     })
//     }
// );


// function setChange(e) {
//     console.log(e);
//     // let config = {
//     //     allBoxes: document.querySelectorAll('.counterBox'),
//     //     counter: document.querySelectorAll('.counterBox_counter'),

//     //   }
//     // // let allBoxes = document.querySelectorAll('.counterBox');
//     // // let counter = document.querySelectorAll('.counterBox_counter');

//     //  if (e.target.classList.contains('counterBox_click')){        
//     //     let classBox = this.dataset.class;
//     //     let keyValue = `${this.dataset.value}`;
//     //     counter.forEach(function (counterSpan) {
//     //          if (counterSpan.dataset.class === classBox) {
//     //              helperObj.setToLS(keyValue, ++counterSpan.innerText);
//     //         }
//     //     })
//     //         }
  
//     // else if (e.target.classList.contains('clear')) {
//     //     localStorage.clear();
//     //     allBoxes.forEach(elem => getFromLS(elem));
               
//     // }
//     // else if (e.target.classList.contains('set')) {
//     //      let newCounter = prompt('выберите счетчик ', 'counter_1/2/3');
//     //      let boxToChange = document.querySelectorAll('div');
//     //      let newCounterValue;
//     //      let heckNumb;     
         
//     //      do {
//     //          newCounterValue = prompt('новое значение', 'число');
//     //          heckNumb = parseInt(newCounterValue);
//     //          boxToChange.forEach(function (smallBox) {
//     //              if (smallBox.dataset.value === newCounter) {
//     //                  console.log(smallBox.children[1].innerText);
//     //                  smallBox.children[1].innerText = heckNumb;
//     //                  helperObj.setToLS(newCounter, heckNumb);
//     //              }
//     //          })
//     //      } while ( isNaN(heckNumb))
//     // }
// }



const helperObj = {
    setToLS(key, value) {
        // console.log(key, value);
        localStorage.setItem(key, JSON.stringify(value));
    },
    getFromLS(key) {
        console.log(key);

        return JSON.parse(localStorage.getItem(key));
    }
}

let clickButton = document.querySelectorAll('button');
// console.log(clickButton);

clickButton.forEach(button => button.addEventListener('click', (e) => {
    let classCheck = e.target.classList[0];
  
    // console.log(keyCount);
    if (classCheck === 'counterBox_click') {
        let keyCount = e.target.nextElementSibling.dataset.class;
        console.log(keyCount);
        incrCounter(e, keyCount);      
    }  
    
    if (classCheck === 'clear') {
        clearCounter();
        console.log('clear');
    }
    if (classCheck === 'set') {
        console.log('set');
    }
    
}));

function incrCounter(e, key) {
    //  let keyCount = e.target.nextElementSibling.dataset.class;
        helperObj.setToLS( key, ++e.target.nextElementSibling.innerText);
};

function clearCounter() {
    localStorage.clear();
    // console.log(clickButton);
    clickButton.forEach((elem) =>{
        // console.log(elem.classList[0] === 'counterBox_click');
        if (elem.classList[0] === 'counterBox_click') {
            // console.log(elem.nextElementSibling.dataset.class);
            helperObj.getFromLS(elem.nextElementSibling.dataset.class);
               }
        
        })
    // helperObj.getFromLS(key);
}


