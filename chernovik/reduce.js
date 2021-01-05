
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