/*

Реализовать объект с методами m1(), m2(), m3(). Должна быть 
возможность выполнять подобный код:

 obj.m1().m2().m3();
 obj.m2().m1().m3();
 obj.m2().m1().m3().m1().m1();
 ...


*/

var user = {
    name: 'Vasya'    
};


function m1() {
    console.log('method m1');
    return this;
   }

function m2() {
     console.log('method m2');
    return this;

}

function m3() {
    console.log('method m3');
    return this;
}


user.m1 = m1;
user.m2 = m2;
user.m3 = m3;
console.log(user);

user.m1().m2().m3();


