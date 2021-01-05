
Vue.component('compNameParent',
    {
        template:
            `<section class='compNameParentClass'>
            <div class='ranges'>
            <child-First-Comp></child-First-Comp>
            <child-Sec-Comp> </child-Sec-Comp>
            <child-Th-Comp> </child-Th-Comp>
            </div>
            <filter-Button> </filter-Button>
            </section>`

    }
);

Vue.component('childFirstComp', {
    template: `
    <section class='childFrame'>
        <div class='child'> 
        </div>
         <input type="range" class='childRange' name="" id="">
       </section>
           `
});

Vue.component('childSecComp', {
    template: `
    <section class='childFrame'>
        <div class='child'> 
        </div>
         <input type="range" class='childRange' name="" id="">
       </section>
           `
});

Vue.component('childThComp', {
    template: `
    <section class='childFrame'>
        <div class='child'> 
        </div>
         <input type="range" class='childRange' name="" id="">
       </section>
           `
});

Vue.component('filterButton',
    {
        template: 
        `<button> FILTER </button>`
})



let myVueTest = {
    el: '#vueSec',
};

new Vue(myVueTest);