// Decorators - decorators are special kind of declaratoin that can be set to a class.
//decorators are used for annotations are a meta-programming syntax.

// class
// method
//property
//parameter
//accessor

function simpleClassDecorator(constructor: Function) {
  console.log("class decorator Called");
}
// class se phle call krne ke liye @

@simpleClassDecorator
class myClass {
  constructor() {
    console.log("My class  Called");
  }
}

const myclassInstance = new myClass();
