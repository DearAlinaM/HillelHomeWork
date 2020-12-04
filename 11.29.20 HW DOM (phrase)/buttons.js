
let buttons = [
  {item: 'save' },
  {item: 'edit' },
  // {item: 'close' }
];

let actions = {
  save: function () {
    console.log('saving');
   
  },
  edit: function () { console.log('editing') },
}

function addButtons(list, toDo) {
  let cont = document.createElement('div');
  list.forEach(el => {
    let but = document.createElement('button');
    but.innerText = el.item;
    cont.append(but);
    // but.addEventListener('click', function (e) {
    //   // but.classList.toggle('rem');
    //   // but.preventDefault();
    //   let toDoAct = e.target;
    //   toDo[toDoAct.innerText]();
    // })
  });
document.body.append(cont);


  cont.addEventListener('click', function (e) {
    cont.classList.toggle('remC');
    let thisBut = e.target;
    let butCol = thisBut.children;
    for (let key of butCol) {
    key.classList.toggle('hide');
    }
    
  })
  
}
addButtons(buttons, actions);
