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
}

SuperMath.prototype.input = function () {
    this.x = +(prompt('X', ''));
    this.y = +(prompt('Y', ''));
    this.znak = prompt('Znak', '');
    return this.check(this); 
}

SuperMath.prototype.add = function () {
    console.log(this.x + this.y);
}

SuperMath.prototype.min = function () {
     console.log(this.x - this.y);
}

SuperMath.prototype.div = function () {
    this.y === 0? console.log('na 0 delit nelzya'):console.log(this.x / this.y);
}

SuperMath.prototype.mul = function () {
     console.log(this.x * this.y);
}

SuperMath.prototype.ost = function () {
     console.log(this.x % this.y);
}

SuperMath.prototype.check = function (obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.znak = obj.znak;
    
    if (confirm('Vypolnit *' + this.znak + '* ?')) {
        if (this.znak === '+') {
            this.add();
        }
        else if (this.znak === '-') {
            this.min();
        }
        else if (this.znak === '/') {
            this.div();
        }
        else if (this.znak === '*') {
            this.mul();
        }
        else if (this.znak === '%') {
            this.ost();
        }
        else {
            console.log('NET TAKOGO ZNAKA')
        }
    }
    else {
           this.input()
    }
}


var obj = { x: 3, y: 2, znak: '+' };
var test = new SuperMath();
test.check(obj);