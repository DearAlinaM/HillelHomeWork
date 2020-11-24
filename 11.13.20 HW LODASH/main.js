
// --- Array methods

// _.chunk(array, [size=1])

/*let myArray_1 = [0, 'a', 1, 'b', 2, 'c', 3, 'd'];
let checkMyArray_1 = _.chunk(myArray_1, 3);
console.log(checkMyArray_1);


// _.compact(array)

let myArray_2 = [0, '', 1, undefined, NaN, 'c', null, false, 'd'];
let checkMyArray_2= _.compact(myArray_2);
console.log(checkMyArray_2);

// _.pull(array, [values])

let myArray_3 = [0, 'a', 1, 'b', 2, 'c', 3, 'd'];
let checkMyArray_3 = _.pull(myArray_3,'a', 'd', 0);
console.log(checkMyArray_3);

// --- “Collection” Methods

// _.filter(collection, [predicate=_.identity])

let myCollection_1 = [
    { 'person': 'Vasya', 'age': 20, 'status': 'married' },
    { 'person': 'Petya', 'age': 30, 'status': 0 },
    { 'person': 'Sasha', 'age': 30, 'status': 'married' },
];

let filtered = _.filter(myCollection_1, function (o) { return o.age > 25 });
console.log(filtered);
*/

const check = _.invokeMap([123, 456], 'sort');
console.log(check)
// => [['1', '2', '3'], ['4', '5', '6']]