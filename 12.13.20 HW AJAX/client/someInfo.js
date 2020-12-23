/*class Example {

  doSome(event) {}
}

const entity = new Example();

someElement.addEventListener('click', entity.doSome.bind(entity));

OR

class Example {
   constructor() {
      this.doSome = this.doSome.bind(this);
  }

  doSome(event) {}
}

const entity = new Example();

someElement.addEventListener('click', entity.doSome);*/

class Example {
  constructor() {
    this.doSmth = this.doSmth.bind(this);
}

  doSmth() {
  console.log('haha')
}
};
let test = new Example();

let button = document.querySelector('form');
console.log(button);
button.addEventListener('submit', () => {
  console.log('hhh');
  test.doSmth();
})