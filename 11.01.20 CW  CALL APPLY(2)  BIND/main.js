function foo() {
    // console.log(arguments);
    // console.log([].slice);
    var slice2 = [].slice;
    // console.log(slice2);
    // console.log(arguments.slice2());
    console.log(slice2.apply(arguments, [1, 3]));

    // Array.prototype.slice.apply(arguments, [1, 3]);
    // console.log(Array.prototype.slice === [].slice);
    console.log(Array.prototype.slice.apply(arguments, [1, 3]));

}

foo('a', 'aa', 4, 2, 5, 8);


function sendAjax(url, data) {
    console.log(data);
    return url;
}

var sendTest = sendAjax.bind(null, 'http');
console.log(sendTest('somedata'));




