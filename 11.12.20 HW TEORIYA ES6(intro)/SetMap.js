// ---- MAP https://learn.javascript.ru/map-set

/*let mapCheck = new Map(); // new Map() – создаёт коллекцию.
let newObj = new Object({hey: 1});
let key2 = 222;

// console.log(mapCheck);
mapCheck.set('key', 'value'); // map.set(key, value) – записывает по ключу key значение value.
mapCheck.set(1, key2);
mapCheck.set(newObj, true);
console.log(mapCheck);

console.log(mapCheck.get(1)) // map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
console.log(mapCheck.has(1)) // map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
mapCheck.delete(1); //map.delete(key) – удаляет элемент по ключу key.
console.log(mapCheck);

console.log(mapCheck.size);// map.size – возвращает текущее количество элементов.
mapCheck.clear(); // map.clear() – очищает коллекцию от всех элементов.
console.log(mapCheck)
*/


// perebor MAP
/*
let newMap = new Map([
    ['value1', 1],
    ['value2', 2],
    ['value3', 3],
['value4', 4],
]);

console.log(newMap.get('value1'));

for (let values of newMap.keys()) { // map.keys() or map.values() or map.entries()
    console.log(values)
}

let person = {
    name: 'John',
    age: 30, 
    marStatus: 'merried',
}

let personMap = new Map(Object.entries(person));
console.log(personMap);

let fruits = new Map();
fruits.set('banana', 1);
fruits.set('kivi', 2);
fruits.set('pineapple', 1);

console.log(fruits);
let newFruits = Object.fromEntries(fruits);
console.log(newFruits);
*/


/// SET Объект Set – это особый вид коллекции: 
// «множество» значений(без ключей), где каждое значение может появляться только один раз.

let newSet = new Set(); 

let vasya = { name: "Vasya" };
let petya = { name: 'Petya' };
let zhenya = { name: 'Zhanya' };

newSet.add(vasya); // set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
newSet.add(petya);
newSet.add(zhenya);
console.log(newSet);
/*
console.log(newSet.delete(vasya)); //set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
console.log(newSet);
console.log(newSet.size) // set.size – возвращает количество элементов в множестве.
console.log(newSet.has(petya)); // set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
console.log(newSet.has(vasya)); 
newSet.clear();
console.log(newSet);*/

// perebor SET

for (let value of newSet) {
    console.log(value);
}

/*
Set имеет те же встроенные методы, что и Map:

    set.values() – возвращает перебираемый объект для значений,
    set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
    set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.


*/