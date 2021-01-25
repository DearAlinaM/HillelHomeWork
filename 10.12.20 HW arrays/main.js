const farmAccountLog = [
  {
    id: 11,
    type: "Meat",
    class: "Cattle",
    family: "Cow",
    name: "Wiz",
    gender: "♂",
    age: 10
  },
  {
    id: 12,
    type: "Milk",
    class: "Cattle",
    family: "Cow",
    name: "Roseanne",
    gender: "♀",
    age: 2
  },
  {
    id: 13,
    type: "Egg",
    class: "Birds",
    family: "Chicken",
    name: "Bam",
    gender: "♀",
    age: 5
  },
  {
    id: 14,
    type: "Meat",
    class: "Birds",
    family: "Goose",
    name: "Gobble",
    gender: "♂",
    age: 8
  },
  {
    id: 15,
    type: "Milk",
    class: "Cattle",
    family: "Goat",
    name: "Anti",
    gender: "♀",
    age: 9
  },
  {
    id: 16,
    type: "Income",
    class: "Cattle",
    family: "Cow",
    name: "Gizmo",
    gender: "♂",
    age: 10
  },
  {
    id: 17,
    type: "Egg",
    class: "Birds",
    family: "Quail",
    name: "Maya",
    gender: "♀",
    age: 2
  },
  {
    id: 18,
    type: "Meat",
    class: "Birds",
    family: "Rooster",
    name: "Toto",
    gender: "♂",
    age: 1
  },
  {
    id: 18,
    type: "Milk",
    class: "Cattle",
    family: "Sheep",
    name: "Hannah",
    gender: "♀",
    age: 5
  },
  {
    id: 19,
    type: "Milk",
    class: "Cattle",
    family: "Cow",
    name: "Sparky",
    gender: "♀",
    age: 7
  },
  {
    id: 20,
    type: "Income",
    class: "Cattle",
    family: "Goat",
    name: "Charlie",
    gender: "♂",
    age: 3
  }
];


var newFarm = farmAccountLog.reduce( 
 (acc , now) => {
    let key = now.family;
    acc[key] ?  acc[key] += 1 : acc[key] = 1;
    return acc
    }
    , {}
)

console.log(newFarm);


/* ARRAY SLICE */

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

function toSlice(arr, a, b) {
  b = b - 1 || arr.length - 1;
  let arrToReturn = [];
  for (let i = a; i < b + 1; i++){
    arrToReturn.push(arr[i])
  }
  return arrToReturn
}

let test = toSlice(animals, 1, 5);
console.log(test)

