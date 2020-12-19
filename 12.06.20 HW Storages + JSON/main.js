/* 
    Создаем 2 блока, с кнопкой Click и счетчиком counter(в виде числа). 
    При нажатии на Click - counter увеличивается. 
    При перезагрузке страницы counter должен сохраняться.

    Создать кнопку ClearCounters()

    Создать кнопку setCounter(), который запрашивает id блока 
    и устанавливает значение( в типе number ) в counter.
*/


let secCounterBox = document.querySelectorAll('section');
secCounterBox.forEach(function (counterBox) {
    let counters = counterBox.childNodes;
    console.log(counters);
    counters.forEach(function (e) {
        if (e.nodeType === 1) {
            e.addEventListener('click', setChange)
        }
    })
    }
);


const helperObj = {
    setToLS(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getFromLS(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

function getFromLS(box) {
    box.children[1].innerText = helperObj.getFromLS(box.dataset.value);
}


secCounterBox.forEach(function (counterBox) {
    let counters = counterBox.childNodes;
    counters.forEach(function (e) {
        if (e.nodeType === 1 && e.tagName === 'DIV') {
           getFromLS(e);
        }
    })
    }
);


function setChange(e) {
      
    let allBoxes = document.querySelectorAll('.counterBox');
    let counter = document.querySelectorAll('.counterBox_counter');
     if (e.target.classList.contains('counterBox_click')){        
        let classBox = this.dataset.class;
        let keyValue = `${this.dataset.value}`;
        counter.forEach(function (counterSpan) {
             if (counterSpan.dataset.class === classBox) {
                 helperObj.setToLS(keyValue, ++counterSpan.innerText);
            }
        })
            }
  
    else if (e.target.classList.contains('clear')) {
        localStorage.clear();
        allBoxes.forEach(elem => getFromLS(elem));
               
    }
    else if (e.target.classList.contains('set')) {
         let newCounter = prompt('выберите счетчик ', 'counter_1/2/3');
         let boxToChange = document.querySelectorAll('div');
         let newCounterValue;
         let heckNumb;     
         
         do {
             newCounterValue = prompt('новое значение', 'число');
             heckNumb = parseInt(newCounterValue);
             boxToChange.forEach(function (smallBox) {
                 if (smallBox.dataset.value === newCounter) {
                     console.log(smallBox.children[1].innerText);
                     smallBox.children[1].innerText = heckNumb;
                     helperObj.setToLS(newCounter, heckNumb);
                 }
             })
         } while ( isNaN(heckNumb))
    }
}



