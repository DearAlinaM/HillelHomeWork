Vue.component('parent', {
    data:()=> {
        return {
            name: 'AlinaFromCompnent'
        }
 },
    template: 
      `<section >
           <h3> {{nameMy}} </h3>
         
             </section>`
})



let vueId = {
    el: '#myVue',
    data: {
        nameMy: 'AlinaFromData'
    },
    beforeCreate() {
            // debugger
            console.log(this, 'beforeCreate');
    },
    created() { // после создания VUE объекта вызывается  created(), * часто используется 
         console.log(this, 'created');
    }, 
    beforeMount() {
        console.log(this, 'beforeMount');
    },
    mounted() {
        // debugger // елемент встравляется в ДОМ дерево (элемент  уже отрисован) * часто используется 
        console.log(this, 'mounted');
    },
    beforeUpdate() {
          console.log(this, 'beforeUpdate');
    },
    updated() {
          console.log(this, 'updated');
    }
    
};



new Vue(vueId);