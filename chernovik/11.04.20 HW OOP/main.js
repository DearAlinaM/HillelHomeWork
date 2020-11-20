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
    
        if (this.znak === '+' ) {
            console.log(SuperMath.prototype.add.call(null, this.X, this.Y));
        }
        else if (this.znak === '*') {
            console.log(SuperMath.prototype.mult.call(null, this.X, this.Y));
        }
        else if (this.znak === '-') {
            console.log(SuperMath.prototype.min.call(null, this.X, this.Y));
        }
        else if (this.znak === '/') {
            console.log(SuperMath.prototype.div.call(null, this.X, this.Y));
        }
        else if (this.znak === '%') {
            console.log(SuperMath.prototype.ost.call(null, this.X, this.Y));
        }
  
    else if (this.znak === undefined) { }
    else {
        console.log( 'ne vernyi znak');
    }
}

SuperMath.prototype.add = function (a, b) {
    return a + b;
}

SuperMath.prototype.mult = function (a, b) {
    return a * b;
}

SuperMath.prototype.min = function (a, b) {
    return a - b;
}

SuperMath.prototype.div = function (a, b) {
    return a / b;
}

SuperMath.prototype.ost = function (a, b) {
    return a % b;
}


SuperMath.prototype.getInput = function () {
    this.X = +(prompt('xNew', ''));
    this.Y = +(prompt('yNew', ''));
    this.znak = prompt('znakNew', '');
    SuperMath.call(this);
}


function check(objToCheck) {
    for (var key in objToCheck) {
        if (key === 'znak') {
            if (confirm('произвести математическое действие ' + objToCheck[key] + ' ?')) {
                SuperMath.call(objToCheck);
              }
            else {
                this.getInput();
            }
        }
    }
}


var test = new SuperMath();
// console.log(test);
var obj = { X: 12, Y: 3, znak: '-'};
test.check = check;
var newRes = test.check(obj);