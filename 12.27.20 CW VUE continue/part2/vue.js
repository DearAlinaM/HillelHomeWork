
Vue.component('compNameParent',
    {
        data() {
            return {
                children: [
                    'Child1',
                    'Child2',
                    'Child3',
                    'Child4',
                    'Child5',
                ], 
                messageP: 'dddd',
                // valueCh: '',
          }  
        },
        methods: {
            showChildren() {
                return this.children
            },
            hello() {
                console.log('hello on Parent CLICK')
            },
            printHello() {
               console.log('hello printed')
            },
            // emitedEvent(AI, emitedTextFromCh) {
            //     console.log('from EMITED PARENT', AI, emitedTextFromCh);
            //     this.valueCh = emitedTextFromCh;
            // },
             emitedEvent({id, toChange}) {
                console.log(id, ' childId from EMITED PARENT', );
            //    console.log(this.children[id] = toChange) -- BAD!!! 
                 this.$set(this.children, id, toChange)
            },

        },
        template:
            `<section @click='hello' class='compNameParentClass' >
            message 
           <h3> PARENT COMPONENT </h3>
         
            <child v-for='(child, $index) in children' :id ='$index' class = 'child' :title='child' 
            @someTextToEmit='emitedEvent'  >
           
            </child>
             </section>`

    }
);



Vue.component('child', {
    props: ['title', 'id'],
    data() {
        return {
            someTextToEmit:''
        }
    },
    methods: {
        // askParentEMIT() {
        //     this.$emit('someTextToEmit', 'additionalINFO',
        //     this.someTextToEmit);
        //     console.log('someText EMITED');
        // }
          askParentEMIT() {
            this.$emit('someTextToEmit', {
                id: this.id,
                toChange: this.someTextToEmit,
            });
            // console.log(this.id);
        }
    },
    template: `
    <section class='childInside' >
     {{title}}
   
    
   <input type='text' v-model ="someTextToEmit"> 
{{someTextToEmit}}
   <button @click ="askParentEMIT" > CLICK to ADD to PARENT </button>
       </section>
           `
});







let myVueTest = {
    el: '#vueSec',
};

new Vue(myVueTest);

