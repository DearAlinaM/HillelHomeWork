function clickToIncr() {
    
    var a = 0;
    console.log(a, ' a 1st from func');
        function inside() {
            a = a + 1;
            console.log(a, ' a from INSIDE');
            return a;
        }
    inside();
    console.log(a, '2nd time');
    inside();
    console.log(a, '3nd time');
   
}

clickToIncr();