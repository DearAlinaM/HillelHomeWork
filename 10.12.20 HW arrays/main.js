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

// var newFarm = farmAccountLog.reduce( 
//     function (acc, now) {
//         let nowTest = now.family;
//         let obj = {[nowTest]: 1};
//         // console.log(obj, 'now.family');

//     let sum = {};
    
    
//         // let test = Object.assign(obj, acc);
//         // return test

//     }
//     , 0
// )

// console.log(newFarm);


let obj = [
  { a: 'one', b: 11 },
  { a: 'two', b: 22 },
  { a: 'one', b: 33 },
  {a: 'three', b: 33},
]


let test = obj.reduce(
  function (acc, cur) {
    console.log(cur);
    console.log(acc);
    return Object.assign(acc, cur)
    // if (cur.a === acc.a) {
    //   console.log(cur.a);
    // }
  }, {}
)
console.log(test)