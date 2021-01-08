
let arr = [4, 8, 35, 1, 33];

function sorter(startArray = [],finalArray = [] ) {
    if (startArray.length === 0) {
        return `min length > 0`
    }
    let j = startArray.length;
    let max = startArray[0];
    let maxI;
    for (i = 0; i < j; i++){
        if (startArray[i] > max) {
            max = startArray[i];
            maxI = i;
        }
    }
    startArray.splice(maxI, 1);
    finalArray.push(max);
    sorter(startArray, finalArray);
    return finalArray;
}

let test = sorter(arr);
console.log(test);


let items = [
    {
        styles: { backgroundColor: 'red' },
        boxName: 'Box_1',
    },
    {
        styles: { backgroundColor: 'green' },
        boxName: 'Box_2',
    },
    {
        styles: { backgroundColor: 'blue' },
        boxName: 'Box_3',
    },
    {
        styles: { backgroundColor: 'yellow' },
        boxName: 'Box_4',
    },
    {
        styles: { backgroundColor: 'black' },
        boxName: 'Box_5',
    },
    {
        styles: { backgroundColor: 'orange' },
        boxName: 'Box_6',
    },
    {
        styles: { backgroundColor: 'grey' },
        boxName: 'Box_7',
    },
];
console.log(items[0].boxName);

function getkey(arrA, keyName) {
    console.log(arrA.length, keyName);
    let keys = [];
    for (i = 0; i < arrA.length; i++){
keys.push(arrA[i][keyName])
    }
    console.log(keys);
}

getkey(items,'boxName');