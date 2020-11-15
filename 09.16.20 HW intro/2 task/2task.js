let student1;
student1 = prompt('Введите Ваш возраст, имя, фамилию', '');

let student2;
student2 = prompt('Введите Ваш возраст, имя, фамилию', '');

let student3;
student3 = prompt('Введите Ваш возраст, имя, фамилию', '');

let midAge;
midAge = (parseInt(student1) + parseInt(student2) + parseInt(student3)) / 3;

console.log('**************');
console.log('Список студентов зарегестрировавшихся на вебинар:');
console.log('1. ' + student1);
console.log('2. ' + student2);
console.log('3. ' + student3);
console.log(
  '-------------- Средний возраст студента:' +
    ' ' +
    midAge +
    ' ' +
    '--------------'
);
console.log('**************');
