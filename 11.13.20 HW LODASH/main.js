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

const check = _.invokeMap([123, 456], 'sort');
console.log(check);
// => [['1', '2', '3'], ['4', '5', '6']]

// _.some(collection, [predicate=_.identity])
var users = [
  { 'user': 'false', 'active': true },
  { 'user': 'false',   'active': false }
];
const someTest = _.some(users, ['user', 'false'])
console.log(someTest);*/


// ---- Function

/*
_.spread(func, [start=0])

let any = _.spread(function (arg1, arg2, arg3) { console.log('spread func arg.', arg1, arg2, arg3) });
any (['one', 'two', 'one more'])

//_.memoize(func, [resolver])

let obj1 = { user: "Ivan", age: 20 };
let obj2 = { user: "Petya", age: 40 };

let keys = _.memoize(_.keys);
console.log(keys(obj1));

let values = _.memoize(_.values);
console.log(values(obj2));
*/

// ---- Lang

/*
// _.clone(value)

let pesron = { firstName: "Ivan", surname: 'Petrov', age: 34 };
let person2 = _.clone(pesron);
console.log(person2);

// _.isEqual(value, other)

let objA = { a: 1, b: 2 };
let objB = { a: 2, b: 2 };
let arr = [1, 2, 'v', 's'];
let arr2 = [1, 2, 'v', 's'];

console.log(_.isEqual(objA, objB));
console.log(_.isEqual(arr, objB));
console.log(_.isEqual(arr, arr2));
*/

// ----- Math

/*
//_.min(array)

console.log(_.min([8, 5, 3, true]));

// _.round(number, [precision=0])

console.log(_.round(8002.02, -3));

//_.sumBy(array, [iteratee=_.identity])

let arr = [{ a: 1 }, { a: 5 }, { a: 4 }];
console.log(_.sumBy(arr, function(arg){return arg.a}))
*/

// ---- Object 

/*
// _.defaults(object, [sources])

console.log(_.defaults({ 'a': 1 }, { 'h': 5 }, { 'd': 4 }))

// _.get(object, path, [defaultValue])

var type = ['a', {'b': 2 }, ['c', 'd', {'m': 5}], ['e']];
console.log(_.get(type, [2], 3));

//_.merge(object, [sources])

let obj1 = {'a': 1, 'b': 2, 'c': 3};
let obj2 = {'d': 4, 'e': 5, 'f': 6};
console.log(_.merge(obj1, obj2));
*/

// --- STRING

/*
// _.repeat([string=''], [n=1])

console.log(_.repeat('Hello World! ', 3))
 
// _.replace([string=''], pattern, replacement)

console.log(_.replace('Hello World', 'Hello', 'Hi'))

//_.startCase([string=''])

console.log(_.startCase('hey_hey-hey'));
*/

// ----- Until Methods

/*
// _.conforms(source)

let users = [
  { 'name': 'Peter', 'surname': 'Ivanov' },
  { 'name': 'Viktor', 'surname': 'Petrov' },
  { 'name': 'Oleg', 'surname': 'Ivanov' },
];

console.log(_.filter(users, _.conforms({
  'surname': function (n) {
    return n === 'Ivanov'
  }
})));

// _.matchesProperty(path, srcValue)

let person = [
  { 'name': 'Peter', 'surname': 'Ivanov' },
  { 'name': 'Viktor', 'surname': 'Petrov' },
  { 'name': 'Oleg', 'surname': 'Ivanov' },
];

console.log(_.filter(person, _.matchesProperty('name', 'Ivan')))

*/