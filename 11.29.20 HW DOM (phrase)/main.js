
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
      but.classList.add('hide');
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



function addButtonsToTable() {
  let table = document.querySelector('table');
  // console.log(table);
  table.addEventListener('click', function (e) {
    // console.log(e.target);
     
    let tdTarget = e.target;
    if (tdTarget.tagName != "TD") {
      return
    }
    let buttonsFrag = makeButtons(buttons);
    tdTarget.append(buttonsFrag);
    // console.log(tdTarget);
    
      tdTarget.classList.toggle('remC');
     
        //   let thisBut = e.target;
        //   let butCol = thisBut.children;
        //   for (let key of butCol) {
        //   key.classList.toggle('hide');
        // }
  


  })
}

addButtonsToTable()




 