/*
    1) Создать класс SuperMath.
    2) Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.

    Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.

    Если - да, сделать математическое действие znak(которое описано в прототипе),
    иначе - запросить ввод новых данных через метод input() класса SuperMath.

    Пример обекта: obj = { X:12, Y:3, znak: “/”},
    возможные варианты znak=> + - / * %.
    При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

     p = new SuperMath();
     p.check(obj); // --> no p.input() -> 3 prompt -> считает
*/




function SuperMath() {
    console.log(this, 'this from SM ');

    // console.log(flag === 'flag')
    // if (flag === 'flag') {
    //     console.log(' SM vyzvan');
    //     console.log(this, 'this from SM AFTER FLAG');
    // }

}
SuperMath.prototype.input = function () {
     console.log(this, 'this from INPUT ');
      return 'INPUT from prototype';
    // console.log(this, 'from this input');
    // var newObj = {
    //     x: prompt('x', ''), 
    //     y: prompt('y', ''), 
    //     znak: prompt('Z', ''), 
    // }
    // console.log(newObj, 'newObj from this input');
    // check(newObj);
}

SuperMath.prototype.add = function () {
     console.log(this, 'this from ADD ');
    return 'SM   from prototype';
    // console.log(this, 'this from ADD PROTOTYPE');
    // return console.log(this.x + this.y);
    // return this, 'this';
}

SuperMath.prototype.min = function () {
     console.log(this, 'this from MIN ');
      return 'MIN   from prototype';
    // return console.log(this.x - this.y);
}



SuperMath.prototype.check = function (){
 console.log(this, 'this from CHECK ');
      return 'CHECK   from prototype';
    // console.log('this ', this);
    // console.log(objToCheck);
    // if (confirm('Vypolnit *' + objToCheck.znak + '* ?')) {
    //     // console.log('vypolnenie ', objToCheck.znak);
    //     if (objToCheck.znak === '+') {
    //         console.log('this ', this);
    //         // this.add.call(objToCheck);
    //     }
    //     else if (objToCheck.znak === '-') {
    //         // console.log('objToCheck.znak === MINUS', objToCheck.znak);
    //         // this.min.call(objToCheck);
    //         console.log('this ', this);
    //     }
    //     else {
    //         console.log('objToCheck.znak === NET TAKOGO');
    //     }
    // }
    // else {
    //     console.log('OTMENA vypolneniya. Novyy vvod dannyh');
    // //  console.log(this)
    //     this.input();

    // }
}



    
var obj = { x: 3, y: 2, znak: '+' };
// var obj2 = { x: 33, y: 22, znak: '+', };



var test = new SuperMath();
console.log()




