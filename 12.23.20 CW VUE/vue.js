// console.log(Vue);

let config = {
    el: '#vue_section',
    data: {
        name: 'ALina',
        collection: [1, 2, 'd', 'g'],
        // console() {
        //     let last = this.collection[this.collection.length - 1];
        //     console.log(this.collection[this.collection.length-1]);
        //     return last;     
        // },
        age: 21,
        answer: 'yes',
        answer2: 'no',                            
        change(m) {
            return this.collection.push(m)
        }                                          
        
} 
}

let vue = new Vue(config);
let array = [1, 2, 3];
array.push('lll');
console.log(array);

function pushLast(n) {
   return array.push(n)
};

pushLast('jh')
console.log(array);
