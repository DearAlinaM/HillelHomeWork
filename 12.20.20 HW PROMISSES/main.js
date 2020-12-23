/* 

Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j. 
Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". 
Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.

*/

let myFunction = function () {
    console.log('Start from 0');
}

let myPromise = new Promise((res, rej) => {
    myFunction();
    res();
});


myPromise
    .then(
        () => { console.log('resolved 1') },
        () => { console.log('rejected 2') }
    )
    .then(
        () => {
            console.log('resolved 3');
            throw Error('errorr');
        },
        () => { console.log('rejected 4') }
    )
    .then(
        () => { console.log('resolved 5') },
        () => {
            console.log('rejected 6');
            throw Error('errorr');
        }
    )
    .then(
        () => { console.log('resolved 7') },
        () => { console.log('rejected 8') }
    )
    .then(
        () => {
            console.log('resolved 9');
            throw Error('errorr');
        },
        () => { console.log('rejected 10') }
    )
    .then(
        () => { console.log('resolved 11') },
        () => { console.log('rejected 12') }
    );


    /*
let myPromise2 = new Promise(
    (res, rej) => {
        myFunction();
        rej();
    }
);


myPromise2
    .then(
        () => { console.log('resolved 1') },
        () => { console.log('rejected 2') }
    )
    .then(
        () => {
            console.log('resolved 3');
            throw Error('errorr')
        },
        () => { console.log('rejected 4') }
    )
    .then(
        () => { console.log('resolved 5') },
        () => {
            console.log('rejected 6');
           
        }
    )
    .then(
        () => { console.log('resolved 7') },
        () => { console.log('rejected 8') }
    )
    .then(
        () => {
            console.log('resolved 9');
            throw Error('errorr')
        },
        () => { console.log('rejected 10') }
    )
    .then(
        () => { console.log('resolved 11') },
        () => { console.log('rejected 12') }
    );*/