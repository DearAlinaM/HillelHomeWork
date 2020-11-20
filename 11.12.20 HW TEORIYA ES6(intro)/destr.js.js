
// destructurizatsyya https://learn.javascript.ru/destructuring
 // ARRAYs
/*let [one, two] = [1, 2];
console.log(one);
console.log(two);

let names = 'Вася, Петя, Маша';

let arr = names.split(',');

console.log(arr);



// let [, , check] = "lyubaya napisannaya stroka vJS".split(" "); 
// console.log(check);


// первый и второй элементы не нужны
let [, , title] = "Юлий Цезарь Император Рима".split(" ");

console.log(title); // Император

let [first, last, check, ...rest] = "lyubaya napisannaya stroka vJS mnoyu".split(' '); 
console.log(first);
console.log(last);
console.log(rest);*/


/// OBJECTS

let person = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 22,
}

let { name,  surname, age: a } = person;
console.log(name);
console.log(surname);
console.log(a);
