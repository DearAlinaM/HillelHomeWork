
/*
Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
При клике на любую ячейку таблицы появляется внутри ячейке многострочное 
текстовое поле с текстом который был в ячейке(на которую нажали) 
и две кнопки save, cancel save -- сохранить в текущей ячейке введенные данные, 
cancel -- оставит все без изменений как было раньше.

P.S. обязательно использовать делегирование события.
*/

let buttons = [
  {item: 'save' },
  {item: 'edit' },
  // {item: 'close' }
];

let actions = {
  save: function () {
    console.log('saving'); },
  edit: function () { console.log('editing') },
}

function makeButtons(list) {
    let frag = document.createDocumentFragment();
    list.forEach(el => {
    let but = document.createElement('button');
      but.innerText = el.item;
      // but.classList.add('hide');
    frag.append(but);
    });
  // console.log(frag);
  return frag;
 
  let butCont = document.createElement('div')
  butCont.append(frag);
  document.body.append(butCont);

  butCont.addEventListener('click', function (e) {
    butCont.classList.toggle('remC');
    let thisBut = e.target;
    let butCol = thisBut.children;
    for (let key of butCol) {
    key.classList.toggle('hide');
    }
    
  })
  
}
// makeButtons(buttons);

function clickOnTableCallback(event) {
  
}

function addButtonsToTable() {
  let table = document.querySelector('table');
    table.addEventListener('click', function (e) {
    // console.log('from click 1');
    let tdTarget = e.target;
    if (tdTarget.tagName != "TD") {
      return
      }
      
    // tdTarget.innerHTML = ''
      
    let buttonsFrag = makeButtons(buttons);
    tdTarget.append(buttonsFrag);  
    tdTarget.classList.toggle('active');
     
//       if (tdTarget. classList.contains('active')) {
//         console.log('true');
//  let thisBut = e.target;
//         let butCol = thisBut.children;
//         console.log(butCol)
//          for (let key of butCol) {
//       key.classList.toggle('hide');
//       }
//       }
      // let thisBut = e.target;
      // let butCol = thisBut.children;
      // for (let key of butCol) {
      // key.classList.toggle('hide');
      // }
      
    //   this.addEventListener('click', function (e2) {
    //     console.log('from click 2');
    //     let click2 = e2.target;
         
    // }, )
  
  });




}

addButtonsToTable()




/*
Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
При клике на любую ячейку таблицы появляется внутри ячейке многострочное 
текстовое поле с текстом который был в ячейке(на которую нажали) 
и две кнопки save, cancel save -- сохранить в текущей ячейке введенные данные, 
cancel -- оставит все без изменений как было раньше.

P.S. обязательно использовать делегирование события.
*/

let buttons = [
  {item: 'save' },
  {item: 'edit' },
  // {item: 'close' }
];

let actions = {
  save: function () {
  console.log('saving'); },
  edit: function () { console.log('editing') },
}

function makeButtons(list) {
    // let frag = document.createDocumentFragment();
    let frag = document.createElement('div');
    list.forEach(el => {
    let but = document.createElement('button');
      but.innerText = el.item;
      frag.append(but);
    });
  return frag;
 }


function doButtonsAdding(e) {
  
        let target = e.target;
        if (target.tagName != 'TD') {
            return
        }
        let frag = makeButtons(buttons);
            if (target.childElementCount === 0) {
              target.append(frag);
              
        }
        else {
            console.log(target, 'est knopki');
            let buttonsToRemove = document.querySelector('div');
            buttonsToRemove.remove();
        }

    }



function addButtonsToTable() {
    let table = document.querySelector('table');
  table.addEventListener('click', doButtonsAdding);
 }

addButtonsToTable()




 
 