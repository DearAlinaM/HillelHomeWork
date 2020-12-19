let form = document.querySelectorAll('form');
console.log(form);

form.forEach(elem => elem.addEventListener('click', function (e) {
    e.preventDefault()
    
    if (e.target.tagName === "BUTTON") {
        console.log(e.target);
        
  }   
}
))



