
/*
Сверстать таблицу 5х5 с любым текстовых содержимым заранее заполненным.
При клике на любую ячейку таблицы появляется внутри ячейке многострочное 
текстовое поле с текстом который был в ячейке(на которую нажали) 
и две кнопки save, cancel save -- сохранить в текущей ячейке введенные данные, 
cancel -- оставит все без изменений как было раньше.

P.S. обязательно использовать делегирование события.
*/
function getButtonsOnTD() {

  let buttons = [
    { item: 'save' },
    { item: 'cancel' },
    // {item: 'close' }
  ];


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


  function makeTextArea(value) {
    let textArea = document.createElement('textarea');
    textArea.value = value;
    let textAreaFrag = document.createDocumentFragment();
    textAreaFrag.append(textArea);
    return textAreaFrag;
  }

  function doButtonsAdding(e) {
    let target = e.target;
    if (target.tagName != 'TD') {
      return
    }
    let fragButtons = makeButtons(buttons);
    let text = target.innerText;
    let fragTA = makeTextArea(text);
        
    if (target.childElementCount === 0) {
      target.append(fragTA);
      target.append(fragButtons);
             
      target.addEventListener('click', function (e1) {
        if (e1.target.tagName === 'BUTTON') {
          let textArea = document.querySelector('textarea');
          // console.log(textArea);
          if (textArea && e1.target.textContent === 'save') {
            target.firstChild.textContent = textArea.value;
            textArea.remove();
            let buttToRemove = document.querySelector('div');
            buttToRemove.remove();
          }
          else if (textArea && e1.target.textContent === 'cancel') {
            textArea.remove();
            let buttonsToRem = document.querySelector('div');
            buttonsToRem.remove();
          }
        }
      })
    }
  
    else {
      let buttonsToRemove = document.querySelector('div');
      buttonsToRemove.remove();
      let taToRemove = document.querySelector('textarea');
      taToRemove.remove();
    }

  }


  function addButtonsToTable() {
    let table = document.querySelector('table');
    table.addEventListener('click', doButtonsAdding);
  }

  addButtonsToTable()

}


getButtonsOnTD()


 