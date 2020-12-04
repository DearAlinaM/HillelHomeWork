//1. перебрать массив
//2 описать методы
//3 положить в контейнео



let items = [{ title: 'Start', handler: 'toDoStart' },
{ title: 'Edit', handler: 'toDoEdit' },
{ title: 'Update', handler: 'toDoUpdate' },
];


const contOfButs = document.createDocumentFragment('frag');
for (let but of items) {
    // console.log(but.title);
    let butName = document.createElement('button');
    butName.innerText = `${but.title}`;
    contOfButs.append(butName);
}
document.body.append(contOfButs);

const actions = {
    Start: 'doStart',
    Edit: 'doEdit'
    // toDoStart : function () { console.log('start') },
    // toDoEdit : function () { console.log('edit') },
    // toDoUpdate : function () { console.log('update') },
};

document.body.addEventListener('click', function (e) {
    // console.log(e.target);
    let action = e.target;
    console.log(action.innerText);
    const act = action.innerText;
    
    // console.log(actions.act);
})
