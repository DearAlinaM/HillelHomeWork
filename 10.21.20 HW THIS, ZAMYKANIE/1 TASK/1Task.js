/* 

1)Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(),
 которая описана в window. 
 При вызове метода obj.renderObject() -> 
 выводит в document всё содержимое объекта, кроме самого метода renderObject

    obj => { x:10, y: 20 }
    obj.renderObject() -> x:10, y: 20
 */

startObj = { x: 10, y: 20, z: 50 };


var renderObject = function () {

    console.log(this);
    // document.write(this);
    for (let key in this) {
        // console.log(window[key]);
        console.log(this[key]);
        console.log(this);
        // if (this.key === this.window) {
        //     //         document.write(key + ' : '+ this[key] +'\n' );
        //     console.log(key);
        // }
    }
}
 
startObj.render = renderObject;
startObj.render(startObj);

// function renderObject(){
//     for (let key in this) {
//         if (key !== 'render') {
//             document.write(key + ' : '+ this[key] +'\n' );
//         }
//     }
// }



// startObj.render(startObj);





