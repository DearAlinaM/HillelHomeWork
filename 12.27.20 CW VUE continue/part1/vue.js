// console.log(Vue);

let myVueTest = {
    el: '#vueSec',
    data: {
        collection: [1, 2, 3],
        products: [
            { item: 'apple', quantity: 3 },
            { item: 'nuts', quantity: 5 },
            { item: 'orange', quantity: 2 },
            { item: 'grape', quantity: 8},
        ],
        login1: '',
        boolean: false,
        time: '25',
        showing: true,

    },

    methods: {
        add() {
            this.collection.push('+1')
        },
        remove() {
            this.collection.pop()
        },
        showAllProd({ item, quantity }) {
            return `${item},
            quantity:  ${quantity}`
        }
    }
};

new Vue(myVueTest);