
Vue.component('compNameParent',
    {
        data() {
            return {
                namePAR: 50, 
                childChild:'',
          }  
        },
        methods: {
            showChildren() {
                return this.children
            },
           
            emitedEvent(fromChild2) {
                this.childChild = fromChild2;                
                this.$set(this,'childChild', fromChild2);

            },
        },
        template:
        `<section class='compNameParentClass'  >
           <h3> PARENT COMPONENT </h3>
            message !!! {{namePAR}} !!!

           <child1 :fromCh2_parent ='childChild' > </child1>
           <child2 :value='namePAR' @goo='emitedEvent'>  </child2>

             </section>`
    }
);



Vue.component('child1', {
    props: ['fromCh2_parent'],
    data() {
        return {
        }
    },
    methods: { 
    },
    template: `
    <section class='childInside'>

     CHILD 1
     <br>
     message: {{fromCh2_parent}}
   
       </section>
           `
});


Vue.component('child2', {
    props: {
    value: Number, // можно указать тип входного параметра, который ожидаем
},
    data() {
        return {
            someTextToEmit: ''
        }
    },
    methods: {
        toParent() {
            this.$emit('goo',this.someTextToEmit); // название события для РОДИТЕЛЯ! 
            console.log('toParent');
}
    },
    template: `
    <section class='childInside' >
    CHILD 2
   
   <input type='text' v-model.number ="someTextToEmit"> 
    NUMBER {{typeof someTextToEmit}}; <br>
    VALUE from Parent {{value}}
   <button @click = 'toParent' > CLICK to ADD to PARENT </button>
       </section>
           `
});


let myVueTest = {
    el: '#vueSec',
};

new Vue(myVueTest);

